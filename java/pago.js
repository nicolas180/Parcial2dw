const calculate = document.querySelector(".calculate");
const valorBoleta = 110000;
const codigo = "cesar-el-mejor";

calculate.addEventListener("click", (e) => {
  e.preventDefault();

  const billAmt = document.getElementById("amount").value;

  const percentage = document.getElementById("discount-percentage").value;

  const discountAmt = document.getElementById("discount-amount");
  const FinalPay = document.getElementById("pay");

  discountAmt.value = (billAmt * percentage) / 100;
  FinalPay.value = billAmt - discountAmt.value;
});

function calcularPrecio() {
  let cantidad = document.getElementById("amount").value;
  document.getElementById("discount-amount").value = cantidad * valorBoleta;
  let codigoInput = document.getElementById("codigo").value;
  if (codigoInput == codigo) {
    document.getElementById("pay").value = cantidad * valorBoleta * 0.8;
  } else {
    document.getElementById("pay").value = cantidad * valorBoleta;
  }
}
