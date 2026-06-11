const API_URL = "https://prediction-of-disease-outbreak-backend-2.onrender.com/"; // Flask running locally

// Tab switching
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// Diabetes
document.getElementById("diabetesForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    Pregnancies: +document.getElementById("Pregnancies").value,
    Glucose: +document.getElementById("Glucose").value,
    BloodPressure: +document.getElementById("BloodPressure").value,
    SkinThickness: +document.getElementById("SkinThickness").value,
    Insulin: +document.getElementById("Insulin").value,
    BMI: +document.getElementById("BMI").value,
    DPF: +document.getElementById("DPF").value,
    Age: +document.getElementById("Age").value,
  };

  const response = await fetch(`${API_URL}/predict_diabetes`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById("diabetesResult").textContent = result.prediction || result.error;
});

// Heart
document.getElementById("heartForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    age: +document.getElementById("age").value,
    sex: +document.getElementById("sex").value,
    cp: +document.getElementById("cp").value,
    trestbps: +document.getElementById("trestbps").value,
    chol: +document.getElementById("chol").value,
    fbs: +document.getElementById("fbs").value,
    restecg: +document.getElementById("restecg").value,
    thalach: +document.getElementById("thalach").value,
    exang: +document.getElementById("exang").value,
    oldpeak: +document.getElementById("oldpeak").value,
    slope: +document.getElementById("slope").value,
    ca: +document.getElementById("ca").value,
    thal: +document.getElementById("thal").value,
  };

  const response = await fetch(`${API_URL}/predict_heart`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById("heartResult").textContent = result.prediction || result.error;
});

// Parkinson’s
document.getElementById("parkinsonsForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const ids = ["MDVPFo","MDVPFhi","MDVPFlo","MDVPJitter","MDVPJitterAbs","MDVPRAP","MDVPPPQ","JitterDDP","MDVPShimmer",
    "MDVPShimmerdB","ShimmerAPQ3","ShimmerAPQ5","MDVPAPQ","ShimmerDDA","NHR","HNR","RPDE","DFA","spread1","spread2","D2","PPE"];
  const data = {};
  ids.forEach(id => data[id] = +document.getElementById(id).value);

  const response = await fetch(`${API_URL}/predict_parkinsons`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  const result = await response.json();
  document.getElementById("parkinsonsResult").textContent = result.prediction || result.error;
});
