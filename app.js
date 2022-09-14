// https://www.omnicalculator.com/conversion/million-to-thousand-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const valueinthousandsRadio = document.getElementById('valueinthousandsRadio');
const valueinmillionsRadio = document.getElementById('valueinmillionsRadio');
const decimalnumberRadio = document.getElementById('decimalnumberRadio');

let thousands;
let millions = v;

// labels of the inpust
const variable = document.getElementById('variable');

valueinthousandsRadio.addEventListener('click', function() {
  variable.textContent = 'Value in millions';
  millions = v;
  result.textContent = '';
});

valueinmillionsRadio.addEventListener('click', function() {
  variable.textContent = 'Value in thousands';
  thousands = v;
  result.textContent = '';
});

decimalnumberRadio.addEventListener('click', function() {
  variable.textContent = 'Value in millions';
  millions = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(valueinthousandsRadio.checked)
    result.textContent = `Value in thousands = ${computevalueinthousands().toFixed(2)}`;

  else if(valueinmillionsRadio.checked)
    result.textContent = `Value in millions = ${computeValueinmillions().toFixed(2)}`;

  else if(decimalnumberRadio.checked)
    result.textContent = `Decimal number = ${computeDecimalnumber().toFixed(2)}`;
})

// calculation

function computevalueinthousands() {
  return Number(millions.value) * 1000;
}

function computeValueinmillions() {
  return Number(thousands.value) / 1000;
}

function computeDecimalnumber() {
  return Number(millions.value) * 1000000;
}