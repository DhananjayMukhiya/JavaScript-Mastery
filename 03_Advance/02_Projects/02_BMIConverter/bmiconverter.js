const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let heightCm = document.getElementById("height").value;
  let result = document.getElementById("result");

  if (weight === "" || heightCm === "") {
    result.innerHTML = "⚠️ Please enter all values";
    result.className = "";
    return;
  }

  // Convert cm → meter
  let heightM = heightCm / 100;

  // BMI Formula
  let bmi = weight / (heightM * heightM);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    result.className = "underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal";
    result.className = "normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    result.className = "overweight";
  } else {
    category = "Obese";
    result.className = "obese";
  }

  result.innerHTML = `
    BMI: ${bmi.toFixed(2)} <br>
    Category: ${category}
  `;
});