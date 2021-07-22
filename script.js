const billAmount = document.getElementById('bill-amount');
const customTipPercent = document.getElementById('custom-amount');
const peopleNumber = document.getElementById('no-of-people');
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const customTip = document.getElementById("custom-amount");
var tipButton = document.getElementsByClassName('extra');
const resetButton = document.getElementById("reset");


billAmount.addEventListener('input',billTextFieldChange);
customTipPercent.addEventListener('input',customTipTextFieldChange);
peopleNumber.addEventListener('input', updateValue);
customTip.addEventListener('input', updateAmount);
resetButton.addEventListener('click',reset);

Array.from(tipButton).forEach(function(tip){
    tip.addEventListener('click',function(){
      
      customTip.value = "";
      const tipPercent = parseInt(tip.innerHTML.replace('%',''));
      const tipPerPerson = (billAmount.value*(tipPercent/100))/peopleNumber.value;
      const totalTip = (parseInt(billAmount.value) + tipPerPerson)/peopleNumber.value;
      if(peopleNumber.value === 0 || peopleNumber.value == "") {
          peopleNumber.style.border = "1px solid red";
          error.classList.remove("error");
          tipAmount.innerHTML = "$0.00";
          totalTip.innerHTML = "$0.00";
      }
      else {
        tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
        totalAmount.innerHTML = "$" + totalTip.toFixed(2);
        peopleNumber.style.border = "none";
        error.classList.add("error");
      }
    })
})

function updateAmount(e) {
    const tipPercent = parseInt(customTip.value);
    const tipPerPerson = (billAmount.value*(tipPercent/100))/peopleNumber.value;
      const totalTip = (parseInt(billAmount.value) + tipPerPerson)/peopleNumber.value;
      if(peopleNumber.value === 0 || peopleNumber.value == "" || customTip.value == "") {
          tipAmount.innerHTML = "$0.00";
          totalTip.innerHTML = "$0.00";
      }
      else {
      tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
      totalAmount.innerHTML = "$" + totalTip.toFixed(2);
      }
}


function billTextFieldChange(e) {
    if(billAmount.value != "") {
        billAmount.onmouseover = function hoverin(e) {
            billAmount.style.border = "1px solid green";
        };
        billAmount.onmouseout = function hoverout(e) {
            billAmount.style.border = "none";
        };
    }
    else {
        billAmount.onmouseover = function hoverin(e) {
            billAmount.style.border = "none";
        };
        billAmount.onmouseout = function hoverout(e) {
            billAmount.style.border = "none";
        };
    }
}


function customTipTextFieldChange(e) {
    if(customTipPercent.value != "") {
        customTipPercent.onmouseover = function hoverin(e) {
            customTipPercent.style.border = "1px solid green";billAmount;
        };
        customTipPercent.onmouseout = function hoverout(e) {
            customTipPercent.style.border = "none";
        };
    }
    else {
        customTipPercent.onmouseover = function hoverin(e) {
            customTipPercent.style.border = "none";
        };
        customTipPercent.onmouseout = function hoverout(e) {
            customTipPercent.style.border = "none";
        };
    }
}
function updateValue(e) {
    const error = document.getElementById("error");
    if(peopleNumber.value == 0) {
        peopleNumber.style.border = "1px solid red";
        error.classList.remove("error");
    }
    else {
        peopleNumber.style.border = "none";
        error.classList.add("error");
    }
    updateAmount();
}


function reset(e){
    billAmount.value = "";
    customTip.value = "";
    peopleNumber.value = "";
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    peopleNumber.style.border = "none";
    error.classList.add("error");
}





