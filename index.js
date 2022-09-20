document.getElementById("calculated-value").style.display = "none";
document.getElementById("each").style.display = "none";

function calculateDinner() {
  const totalValue = document.getElementById("value").value;
  const serviceCharge = document.getElementById("service-charge").value;
  const numberOfPeople = document.getElementById("number-people").value;

  if (
    totalValue === "" ||
    serviceCharge == 0 ||
    isNaN(totalValue) ||
    isNaN(numberOfPeople)
  ) {
     alert("Por favor, coloque um valor válido!");
  }

  if (numberOfPeople === "" || numberOfPeople <= 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let totalSeviceCharge = (totalValue * serviceCharge) / numberOfPeople;
  let total = totalSeviceCharge + totalValue / numberOfPeople;

  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("calculated-value").style.display = "block";
  document.getElementById("value-people").innerHTML = total;
}

document.getElementById("calculate").onclick = function () {
  calculateDinner();
};
