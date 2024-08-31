let select = document.querySelectorAll(".currency");
let inputCurrency = document.getElementById("inputCurrency");
console.log(inputCurrency);
let outputCurrency = document.getElementById("outputCurrency");

const host = "api.frankfurter.app";
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    for (let i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

function Convert() {
  let inputCurrencyConvert = inputCurrency.value;
  if(select[0].value != select[1].value) {
    // alert("Need 2nd value");
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${inputCurrencyConvert}&from=${select[0].value}&to=${select[1].value}`)
      .then((val) => val.json())
      .then((val) => {
        outputCurrency.value = Object.values(val.rates)[0]
      });
  } else {
    alert("Need to fill Both values for converting");
  }
}
