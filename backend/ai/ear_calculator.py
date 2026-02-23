import numpy as np


def calculate_ear(eye):
    """
    eye: list of 6 [x, y] points
    """

    eye = np.array(eye)

    A = np.linalg.norm(eye[1] - eye[5])
    B = np.linalg.norm(eye[2] - eye[4])
    C = np.linalg.norm(eye[0] - eye[3])

    if C == 0:
        return 0.0

    return (A + B) / (2.0 * C)


def calculate_both_ears(left_eye, right_eye):
    leftEAR = calculate_ear(left_eye)
    rightEAR = calculate_ear(right_eye)

    avgEAR = (leftEAR + rightEAR) / 2.0

    return {
        "leftEAR": float(leftEAR),
        "rightEAR": float(rightEAR),
        "avgEAR": float(avgEAR),
    }