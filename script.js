function calculateBMI() {
  let weightinput = parseFloat(document.getElementById("weight").value);
  let heightinput = parseFloat(document.getElementById("height").value) / 100;

  let bmi = weightinput / (heightinput * heightinput);
  document.getElementById("result").innerHTML = bmi.toFixed(2);

  if (bmi < 18.5) {
    result.style.color = "blue";
  } else if (bmi < 25) {
    result.style.color = "green";
  } else if (bmi < 30) {
    result.style.color = "orange";
  } else {
    result.style.color = "red";
  }
}
