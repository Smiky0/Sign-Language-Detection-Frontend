# American Sign Language Detection System

## Overview
This project is an **American Sign Language (ASL) Detection System** that leverages **MediaPipe** for hand detection, **Random Forest Classifier** for model training, and **OpenCV** for capturing live image frames. The frontend is built using **React.js with Vite** and styled with **Tailwind CSS**, while the backend uses **FastAPI** with **Starlette WebSocket** for real-time communication and **ONNX** for model inference.

## Technologies Used
### Backend:
- **FastAPI** - Lightweight and fast backend framework for handling API requests.
- **Starlette WebSocket** - Enables real-time communication between frontend and backend.
- **ONNX** - Used for optimized model inference.
- **MediaPipe** - Extracts hand landmarks for ASL detection.
- **Random Forest Classifier** - Trained model for sign language recognition.

### Frontend:
- **React.js (Vite)** - Fast and efficient frontend framework.
- **Tailwind CSS** - Used for styling the UI.
- **WebSockets** - For real-time data exchange between frontend and backend.

### Other Tools:
- **OpenCV** - Captures live frames from the webcam.
- **NumPy & Pandas** - Data preprocessing and handling.

## Installation & Setup
### Prerequisites:
- Python 3.8+
- Node.js 16+
- pip & virtual environment

### Backend Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/asl-detection.git
   cd asl-detection/backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
 

### Frontend Setup:
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
1. Start the backend server.
2. Start the frontend application.
3. Open the provided URL in a web browser.
4. Allow webcam access for real-time ASL detection.
5. Perform ASL gestures, and the system will recognize and display the corresponding text.

## Model Training
1. Collect hand landmark data using MediaPipe.
2. Preprocess data using Pandas and NumPy.
3. Train the Random Forest Classifier.
4. Convert the model to ONNX format for efficient inference.

## Future Enhancements
- Improve model accuracy with more training data.
- Implement a deep learning model for better performance.
- Add multilingual support for accessibility.
- Deploy the system on the cloud for global access.

## Contributing
Feel free to fork the repository, create a feature branch, and submit a pull request with improvements.

## License
This project is open-source and available under the MIT License.

---
### Contact
For queries or collaborations, contact [Soumik Ghosh, Nabajyoti Basak]
```