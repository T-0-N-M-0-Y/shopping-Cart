function finalPriceCheck(elementId) {
    const priceTotalElement = document.getElementById(elementId);
    const priceTotalElementString = priceTotalElement.innerText;
    const currentPriceTotal = parseInt(priceTotalElementString);
    return currentPriceTotal;
}

function setTextElementById(elementId, value) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function calculateSubtotal() {
    //calculate Final Total
    const currentPhonePriceTotal = finalPriceCheck('total-phone-price');
    const currentCasePriceTotal = finalPriceCheck('case-total-price');
    const currentSubtotal = currentPhonePriceTotal + currentCasePriceTotal;
    // const subTotal = document.getElementById('sub-total');
    // subTotal.innerText = currentSubtotal;
    setTextElementById('sub-total', currentSubtotal);

    //Tax Total
    const taxAmountString = (currentSubtotal * .1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementById('tax-total', taxAmount)

    //Final Total
    const checkoutTotal = currentSubtotal + taxAmount;
    setTextElementById('final-total', checkoutTotal);
}

// document.getElementById('btn-phone-plus').addEventListener('click', function() {
//     calculateSubtotal();
// })
// document.getElementById('btn-phone-minus').addEventListener('click', function() {
//     calculateSubtotal();
// })
// document.getElementById('btn-case-plus').addEventListener('click', function() {
//     calculateSubtotal();
// })
// document.getElementById('btn-case-minus').addEventListener('click', function() {
//     calculateSubtotal();
// })

// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const currentPhonePriceTotal = finalPriceCheck('total-phone-price');
//     const currentCasePriceTotal = finalPriceCheck('case-total-price');
//     const currentSubtotal = currentPhonePriceTotal + currentCasePriceTotal;
//     const subTotal = document.getElementById('sub-total');
//     subTotal.innerText = currentSubtotal;
// })

// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const currentPhonePriceTotal = finalPriceCheck('total-phone-price');
//     const currentCasePriceTotal = finalPriceCheck('case-total-price');
//     const currentSubtotal = currentPhonePriceTotal + currentCasePriceTotal;
//     const subTotal = document.getElementById('sub-total');
//     subTotal.innerText = currentSubtotal;
// })

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const currentPhonePriceTotal = finalPriceCheck('total-phone-price');
//     const currentCasePriceTotal = finalPriceCheck('case-total-price');
//     const currentSubtotal = currentPhonePriceTotal + currentCasePriceTotal;
//     const subTotal = document.getElementById('sub-total');
//     subTotal.innerText = currentSubtotal;
// })
// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const currentPhonePriceTotal = finalPriceCheck('total-phone-price');
//     const currentCasePriceTotal = finalPriceCheck('case-total-price');
//     const currentSubtotal = currentPhonePriceTotal + currentCasePriceTotal;
//     const subTotal = document.getElementById('sub-total');
//     subTotal.innerText = currentSubtotal;
// })