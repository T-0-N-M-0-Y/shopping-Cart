function updateCaseNumber(isIncrease) {
    const inputField = document.getElementById('case-input-field')
    const inputNumber = inputField.value;
    const number = parseInt(inputNumber)
    let newNumber;
    if (isIncrease == true) {
        newNumber = number + 1;
    }
    else {
        newNumber = number - 1;
    }
    inputField.value = newNumber;
    return newNumber;
}
function caseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotal = document.getElementById('case-total-price');
    caseTotal.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    caseTotalPrice(newCaseNumber);
    calculateSubtotal();

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    caseTotalPrice(newCaseNumber);
    calculateSubtotal();

})