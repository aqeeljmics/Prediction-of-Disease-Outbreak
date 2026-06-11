# 🏥 Prediction of Disease Outbreak

A **Machine Learning-based Disease Prediction System** that helps predict the likelihood of **Diabetes, Heart Disease, and Parkinson’s Disease** based on user input.  
This project uses **Support Vector Machine (SVM)** for model training and is deployed using **Flask**.

---
## 🌐 Live Demo

You can access the deployed project here:  
👉 [Prediction of Disease Outbreak - Live](https://prediction-of-disease-outbreak-backend-2.onrender.com/)

## 📌 Features

✅ Predicts **Diabetes, Heart Disease, and Parkinson’s Disease**  
✅ REST API built using **Flask**  
✅ **CORS enabled** for frontend-backend integration  
✅ Uses **pre-trained models** stored as `.pkl` files  
✅ Can be deployed on platforms like **Render, Vercel, or Heroku**  

---

## 🖥 Tech Stack

- **Python**  
- **Flask** (for API)  
- **Scikit-Learn** (for SVM model training)  
- **NumPy**, **Pandas** (for data preprocessing)  
- **HTML, CSS, JavaScript** (for frontend integration)  

---

## 🚀 How to Run

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/disease-prediction.git
cd disease-prediction
```
### 2️⃣ Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate    # on Windows
source venv/bin/activate # on macOS/Linux
```

### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
### 4️⃣ Run Flask App
```bash
python app.py
Or with Gunicorn (for production):
gunicorn --bind 0.0.0.0:5000 app:app
```

### 📊 Dataset Information
The dataset used for model training was provided during the B.Tech major project at ASCT:

- Diabetes Dataset

- Heart Disease Dataset

- Parkinson’s Disease Dataset

### 🎯 Model Details
- Algorithm Used: Support Vector Machine (SVM)

- Training Datasets: Preprocessed medical datasets

- Evaluation Metrics: Accuracy, Precision, Recall

### 📈 API Endpoints
Endpoint	Method	Description
```bash
/predict_diabetes	POST	Predicts Diabetes
/predict_heart	POST	Predicts Heart Disease
/predict_parkinsons	POST	Predicts Parkinson’s Disease
```

Each endpoint accepts JSON input and returns a prediction string.

### 📂 Project Folder Structure
```bash
disease-prediction/
│
├── app.py
├── requirements.txt
├── gunicorn_config.py
├── /training_models
│   ├── diabetes_model.pkl
│   ├── heart_model.pkl
│   └── parkinsons_model.pkl
│
├── /templates
│   └── index.html
│
├── /static
│   └── styles.css
│
└── README.md
```
### 📌 Future Improvements
- Improve accuracy by fine-tuning SVM hyperparameters
- Add frontend UI with live form inputs
- Deploy using Docker + Render
- Extend prediction to more diseases

### 🏆 Credits
- 👨‍💻 Developed by Aqeel Ahmad, Ramishwar Gautam, Tahir Ansari

- 🎓 Part of B.Tech. Major Project

- 🙌 With guidance under Prof. Padmani Yadav Ma'am

### ⭐ Contribute
If you find this project useful, feel free to ⭐ star the repository and contribute!
---
