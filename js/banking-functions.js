// function 1: to get data from input field by Id
function getElementDataById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    // clearing the input data after updating hereafter
    inputField.value = '';
    // returning the result or amount
    return inputValue;
}

// function 2: to get data from input text by Id
function getElementTextDataById(textInputId){
    const inputTextField = document.getElementById(textInputId);
    const inputTextValueString = inputTextField.innerText;
    const inputTextValue = parseFloat(inputTextValueString);
    return inputTextValue;
}

// function 3: to reset the current balance with the updated balance
function balanceResetById(idName, balanceAmount){
    const fieldName = document.getElementById(idName);
    fieldName.innerText = balanceAmount;
}