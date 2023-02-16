function updatePhoneNumber(isIncrease) {
    const inputField = document.getElementById('phone-input-field')
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
function phoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('total-phone-price');
    phoneTotal.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    phoneTotalPrice(newPhoneNumber);
    calculateSubtotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    phoneTotalPrice(newPhoneNumber);
    calculateSubtotal();

})

// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const inputField = document.getElementById('phone-input-field')
//     const inputNumber = inputField.value;
//     const number = parseInt(inputNumber)
//     const newNumber = number + 1;
//     inputField.value = newNumber;
// })

// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const inputField = document.getElementById('phone-input-field')
//     const inputNumber = inputField.value;
//     const number = parseInt(inputNumber)
//     const newNumber = number - 1;
//     inputField.value = newNumber;
// })