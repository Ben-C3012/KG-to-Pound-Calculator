

//  Get Elements input 
const poundInput = document.querySelector('#poundInput')
const kgInput = document.querySelector('#kgInput')


// Add Event Listeners 

poundInput.addEventListener('input', calcPound)
kgInput.addEventListener('input', calcKg)


function calcPound() {

//  Calc  P to Kg 
let kgResult =  (poundInput.value / 2.205).toFixed(2)

// Display kg result 
kgInput.value = kgResult

}


function calcKg() {

// Calc kg to P 
let poundResult = (kgInput.value * 2.205).toFixed(2)

// Display kg Result 
poundInput.value = poundResult




}