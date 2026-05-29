const amountInput = document.querySelector("#amount");
const methodInput = document.querySelector("#method");
const chargeEl = document.querySelector("#charge");
const totalEl = document.querySelector("#total");
const rateEl = document.querySelector("#rate");
const quickButtons = document.querySelectorAll("[data-amount]");

function formatBDT(value) {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

function calculate() {
  const amount = Number(amountInput.value || 0);
  const rate = Number(methodInput.value);
  const charge = amount * rate / 1000;
  const total = amount + charge;

  chargeEl.textContent = formatBDT(charge);
  totalEl.textContent = formatBDT(total);
  rateEl.textContent = `Tk ${rate.toFixed(2)} per 1,000`;
}

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountInput.value = button.dataset.amount;
    calculate();
  });
});

amountInput.addEventListener("input", calculate);
methodInput.addEventListener("change", calculate);
calculate();
