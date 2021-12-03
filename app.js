const intials = document.getElementById("intail-price");
const quantitys = document.getElementById("stock-quantity");
const currents = document.getElementById("current-price");
const submit = document.getElementById("submit");
const output = document.getElementById("output-box");

submit.addEventListener("click", submitHandler);
function submitHandler() {
  const ip = Number(intials.value);
  const qty = Number(quantitys.value);
  const curr = Number(currents.value);

  calculateprofitAndloss(ip, qty, curr);
}

function calculateprofitAndloss(intial, quantity, current) {
  if (intial > current) {
    const loss = (intial - current) * quantity;
    const lossPrecentage = (loss / intial) * 100;
    showoutput(`hey the loss is ${loss} and the precent is ${lossPrecentage}%`);
  }
  if (current > intial) {
    const profit = (current - intial) * quantity;
    const profitPrecentage = (profit / intial) * 100;
    showoutput(
      `hey the profit is ${profit} and the precent is ${profitPrecentage}%`
    );
  } else {
    showoutput(`no pain no gain the the person`);
  }
}
function showoutput(message) {
  output.innerHTML = message;
}
