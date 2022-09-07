var initialPrice = document.querySelector("#initial-price");
var quantityStock = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var btnCheck = document.querySelector("#check-number");
var outputMessage = document.querySelector(".output-message");

function calculateProfiteAndLoss(initial, quantity, current) {
  if (initial > current) {
    const Loss = (initial - current) * quantity;
    const lossPercentage = (Loss / initial) * 100;

    showMessage(
      `hey it is loss ${Loss} and its Percentageis ${lossPercentage.toFixed(
        2
      )}%`
    );
  } else if (current > initial) {
    const Profit = (current - initial) * quantity;
    const profitPercentage = (Profit / initial) * 100;
    showMessage(
      `hey it is profit ${Profit} and its Percentageis ${profitPercentage.toFixed(
        2
      )}%`
    );
  } else if (initialPrice !== 0 || quantityStock !== 0 || currentPrice !== 0) {
    showMessage("Enter in the field");
  } else {
    showMessage("No Pain No Gain No Pain No Gain");
  }
}
function clickHanlder() {
  var ip = Number(initialPrice.value);
  var qly = Number(quantityStock.value);
  var curr = Number(currentPrice.value);

  calculateProfiteAndLoss(ip, qly, curr);
}

btnCheck.addEventListener("click", clickHanlder);
function showMessage(message) {
  outputMessage.innerHTML = message;
}
//  = "Yay! Angle from triangle";
// outputMessage.innerText = "Noo! Angle not from triangle";
