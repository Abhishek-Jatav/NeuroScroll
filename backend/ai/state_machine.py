import time


class BlinkStateMachine:

    def __init__(self, threshold=0.25):
        self.default_threshold = threshold
        self.threshold = threshold

        self.eye_closed = False
        self.blink_start_time = None
        self.last_blink_time = 0

        self.long_blink_duration = 0.6
        self.double_blink_window = 0.5

        # ---- Calibration ----
        self.calibrating = True
        self.calibration_start = time.time()
        self.calibration_data = []
        self.calibration_duration = 3  # seconds

    def update(self, avg_ear):

        current_time = time.time()
        gesture = None

        # -------------------------
        # CALIBRATION PHASE
        # -------------------------
        if self.calibrating:
            self.calibration_data.append(avg_ear)

            if current_time - self.calibration_start >= self.calibration_duration:
                open_eye_avg = sum(self.calibration_data) / len(self.calibration_data)

                self.threshold = open_eye_avg * 0.75
                self.calibrating = False

                print("✅ Calibration complete")
                print("Open EAR:", round(open_eye_avg, 3))
                print("New Threshold:", round(self.threshold, 3))

            return None  # No gesture during calibration

        # -------------------------
        # GESTURE DETECTION
        # -------------------------

        if avg_ear < self.threshold:
            if not self.eye_closed:
                self.eye_closed = True
                self.blink_start_time = current_time

        else:
            if self.eye_closed:
                duration = current_time - self.blink_start_time
                self.eye_closed = False

                if duration >= self.long_blink_duration:
                    gesture = "LONG_BLINK"

                elif (current_time - self.last_blink_time) <= self.double_blink_window:
                    gesture = "DOUBLE_BLINK"

                else:
                    gesture = "BLINK"

                self.last_blink_time = current_time

        return gesture