# 👁️ JustBlink — AI Vision-Based Document Control System

> **Control documents using your eyes.**
> Real-time blink detection powered by **AI + MediaPipe + WebSockets + FastAPI**

---

# 🌟 Live Demo

🔴 **Live App**
https://justblink-abhishek-jatav.netlify.app/

🎥 **Demo Video**
https://youtu.be/uO7HiXPRPAI?si=4G5wsIo2pqV_UZo-

📦 **GitHub Repository**
https://github.com/Abhishek-Jatav/NeuroScroll

---

# 🚀 Overview

**JustBlink (NeuroScroll)** is an **AI-powered real-time human-computer interaction system** that enables users to control documents using **eye gestures**.

The system processes live video streams, extracts facial landmarks, calculates **Eye Aspect Ratio (EAR)**, and detects blink patterns to trigger document scrolling actions.

This project demonstrates:

* Real-time Computer Vision
* Human-Computer Interaction (HCI)
* AI-based Gesture Recognition
* Full-stack WebSocket Architecture

---

# 🏗️ System Architecture

```
Frontend (Next.js + MediaPipe)
        ↓
FaceMesh Landmark Detection
        ↓
WebSocket Streaming
        ↓
FastAPI Backend
        ↓
EAR Calculation
        ↓
Blink State Machine
        ↓
Gesture Recognition
        ↓
Document Control (Scroll / Click)
```

---

# ✨ Core Features

## 👁️ Eye Gesture Controls

| Gesture         | Action       |
| --------------- | ------------ |
| 👁 Single Blink | Scroll Down  |
| 👁👁 Long Blink | Scroll Up    |
| ⚡ Double Blink  | Click Action |

---

## 🧠 Intelligent Detection Engine

* Real-time **Eye Aspect Ratio (EAR)** calculation
* Adaptive threshold calibration
* Blink classification logic
* Finite State Machine detection
* Noise-resistant gesture detection
* Cooldown-based stability handling

---

## 🎨 Visual System Interface

* Live camera feed
* Facial mesh overlay
* Real-time AI simulation
* Document/PDF viewer panel
* Interactive gesture response

---

# 🛠️ Tech Stack

## Frontend

* **Next.js (App Router)**
* **React**
* **MediaPipe FaceMesh**
* **WebSocket API**
* **Tailwind CSS**

---

## Backend

* **FastAPI**
* **Uvicorn**
* **NumPy**
* **MongoDB**
* **Python-dotenv**

---

## AI & Vision

* MediaPipe FaceMesh
* Eye Aspect Ratio (EAR)
* Blink State Machine
* Gesture Classification Engine

---

# 📂 Project Structure

```
NeuroScroll/
│
├── backend/
│   ├── ai/
│   │   ├── ear_calculator.py
│   │   ├── state_machine.py
│   │   └── gesture_engine.py
│   │
│   ├── routers/
│   │   └── websocket.py
│   │
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   ├── VisionSystem.jsx
│   │   │   └── InstructionPDF.jsx
│   │   │
│   │   └── page.tsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation Guide

## 🔹 Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate      # Windows
# source venv/bin/activate # Mac/Linux

pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```
http://localhost:8000
```

---

## 🔹 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```
http://localhost:3000
```

---

# 🏭 Production Build

## Frontend

```bash
npm run build
npm start
```

---

## Backend

```bash
uvicorn main:app \
--host 0.0.0.0 \
--port 8000 \
--workers 2
```

---

# 🧪 How It Works

## 👁️ Eye Aspect Ratio (EAR)

EAR measures how open the eye is.

```
EAR = (A + B) / (2C)
```

Where:

* **A, B → Vertical eye distances**
* **C → Horizontal eye distance**

Interpretation:

| EAR Value | Meaning    |
| --------- | ---------- |
| High EAR  | Eye Open   |
| Low EAR   | Eye Closed |

---

## 🧠 Blink Detection Logic

The system uses a **Finite State Machine**:

1. Detect eye closure
2. Measure blink duration
3. Classify blink type
4. Apply cooldown
5. Trigger gesture

---

# 🎯 Demo Flow

1. Open the web app
2. Allow camera access
3. Calibration runs (~3 seconds)
4. Blink to control document

---

# 📊 Performance Highlights

* Real-time gesture detection
* Low-link latency communication
* Stable multi-blink recognition
* Smooth scrolling response
* Optimized frame processing

---

# 🔥 Future Improvements

* 🎯 Head movement cursor control
* 📊 Live EAR graph visualization
* 🧠 Deep learning gesture classifier
* 📱 Chrome Extension
* 🖥️ Electron Desktop App
* ☁️ SaaS deployment version
* ♿ Accessibility mode for disabled users

---

# 🧠 Learning Outcomes

This project demonstrates strong understanding of:

* Computer Vision Systems
* Real-time Video Processing
* WebSocket Communication
* Human-Computer Interaction
* State Machine Design
* Full-Stack AI Integration

---

# 👨‍💻 Author

**Abhishek Jatav**
B.Tech — Delhi Technological University

🔗 LinkedIn
https://www.linkedin.com/in/abhishek-jatav-067946261

🌐 Portfolio
https://nexabuild-abhishek-jatav.netlify.app/

---

# 📜 License

This project is developed for **research and educational purposes**.

---

# 🌟 JustBlink (NeuroScroll)

**AI meets Accessibility**

Hands-free.
Real-time.
Intelligent.

🚀
