from ai.ear_calculator import calculate_both_ears
from ai.state_machine import BlinkStateMachine


class GestureEngine:

    def __init__(self, threshold=0.25):
        self.blink_detector = BlinkStateMachine(threshold=threshold)

    def process(self, left_eye, right_eye):
        """
        left_eye, right_eye -> list of 6 [x,y] points
        """

        ear_data = calculate_both_ears(left_eye, right_eye)

        avg_ear = ear_data["avgEAR"]

        gesture = self.blink_detector.update(avg_ear)

        return {
            "leftEAR": ear_data["leftEAR"],
            "rightEAR": ear_data["rightEAR"],
            "avgEAR": avg_ear,
            "gesture": gesture
        }