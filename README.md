
---

# 👁️ JustBlink – AI Vision Based Document Control System

> Control documents using your eyes.
> Real-time blink detection powered by AI + WebSocket + MediaPipe.

---

## 🚀 Overview

JustBlink (NeuroScroll) is a real-time human-computer interaction system that allows users to control documents using eye gestures.

The system:

* 🎥 Captures live video
* 🧠 Extracts facial landmarks using MediaPipe
* 📊 Calculates Eye Aspect Ratio (EAR)
* 🔁 Detects blink patterns using a state machine
* 📄 Scrolls a document in real time

---

## 🏗️ System Architecture

Frontend (Next.js)
↓
MediaPipe FaceMesh
↓
WebSocket (Live Streaming)
↓
FastAPI Backend
↓
EAR Calculation
↓
Blink State Machine
↓
Gesture Response

---

## ✨ Features

### 👁️ Gesture Controls

* 👁 Single Blink → Scroll Down
* 👁👁 Long Blink → Scroll Up
* ⚡ Double Blink → Click Action

### 🧠 Intelligent Detection

* Real-time EAR calculation
* Adaptive threshold calibration
* Blink state machine logic
* Noise-resistant detection

### 🎨 Visual System Interface

* Live camera feed
* Green facial mesh overlay
* Real-time AI analysis simulation
* PDF-style document panel

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* MediaPipe FaceMesh
* WebSocket API
* React

### Backend

* FastAPI
* Uvicorn
* NumPy
* MongoDB
* Python-dotenv

---

## 📂 Project Structure

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
│   │   └── page.tsx
│
└── README.md
```

---

## ⚙️ Installation Guide

### 🔹 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Run server:

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🏭 Production Build

### Frontend

```bash
npm run build
npm start
```

### Backend

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 2
```

---

## 🧪 How It Works

### 👁️ Eye Aspect Ratio (EAR)

EAR measures vertical eye openness:

```
EAR = (A + B) / (2C)
```

Where:

* A & B → Vertical distances
* C → Horizontal distance

Lower EAR → Eye closed
Higher EAR → Eye open

---

### 🧠 Blink Detection Logic

The system uses a finite state machine:

* Detect eye close
* Measure duration
* Classify blink type
* Apply cooldown window

---

## 🎯 Demo Flow

1. Open system
2. Allow camera access
3. Calibration runs for 3 seconds
4. Blink to control document

---

## 🔥 Future Improvements

* 🎯 Head movement cursor control
* 📊 Live EAR graph overlay
* 🧠 ML-based gesture model
* 📱 Chrome Extension version
* 🖥️ Desktop (Electron) app
* ☁️ SaaS deployment

---

## 👨‍💻 Author

**Abhishek Jatav**
B.Tech – Delhi Technological University

🔗 LinkedIn:
[https://www.linkedin.com/in/abhishek-jatav-067946261](https://www.linkedin.com/in/abhishek-jatav-067946261)

🌐 Portfolio:
[https://nexabuild-abhishek-jatav.netlify.app/](https://nexabuild-abhishek-jatav.netlify.app/)

---

## 📜 License

This project is for research and educational purposes.

---

# 🌟 JustBlink (NeuroScroll)

AI meets Accessibility.
Hands-free. Real-time. Intelligent.

---