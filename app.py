from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows frontend (HTML/JS) to access backend

# Load models
def load_model(path):
    with open(path, 'rb') as file:
        return pickle.load(file)

diabetes_model = load_model("training_models/diabetes_model.pkl")
heart_model = load_model("training_models/heart_model.pkl")
parkinsons_model = load_model("training_models/parkinsons_model.pkl")


@app.route('/')
def home():
    return render_template('index.html')


# Diabetes Prediction
@app.route('/predict_diabetes', methods=['POST'])
def predict_diabetes():
    data = request.json
    try:
        features = np.array([[data['Pregnancies'], data['Glucose'], data['BloodPressure'],
                              data['SkinThickness'], data['Insulin'], data['BMI'],
                              data['DPF'], data['Age']]])
        prediction = diabetes_model.predict(features)
        result = "The person is Diabetic" if prediction[0] == 1 else "The person is not Diabetic"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)})


# Heart Disease Prediction
@app.route('/predict_heart', methods=['POST'])
def predict_heart():
    data = request.json
    try:
        features = np.array([[data['age'], data['sex'], data['cp'], data['trestbps'],
                              data['chol'], data['fbs'], data['restecg'], data['thalach'],
                              data['exang'], data['oldpeak'], data['slope'], data['ca'], data['thal']]])
        prediction = heart_model.predict(features)
        result = "The person has Heart Disease" if prediction[0] == 1 else "The person does not have Heart Disease"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)})


# Parkinson's Prediction
@app.route('/predict_parkinsons', methods=['POST'])
def predict_parkinsons():
    data = request.json
    try:
        features = np.array([[data['MDVPFo'], data['MDVPFhi'], data['MDVPFlo'], data['MDVPJitter'],
                              data['MDVPJitterAbs'], data['MDVPRAP'], data['MDVPPPQ'], data['JitterDDP'],
                              data['MDVPShimmer'], data['MDVPShimmerdB'], data['ShimmerAPQ3'], data['ShimmerAPQ5'],
                              data['MDVPAPQ'], data['ShimmerDDA'], data['NHR'], data['HNR'], data['RPDE'],
                              data['DFA'], data['spread1'], data['spread2'], data['D2'], data['PPE']]])
        prediction = parkinsons_model.predict(features)
        result = "The person has Parkinson’s Disease" if prediction[0] == 1 else "The person does not have Parkinson’s Disease"
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)})

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'}), 200


if __name__ == '__main__':
    app.run(debug=True)
