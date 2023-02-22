/* Deposit part */

// step 1: click event listener
document.getElementById('btn-deposit-submit').addEventListener('click', function(){

    // step 2: get the value from deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);

    // step 3: get the previous deposit balance
    const prevDepositField = document.getElementById('deposit-total');
    const prevDepositAmountString = prevDepositField.innerText;
    const prevDepositAmount = parseFloat(prevDepositAmountString);

    // step 4: get initial total balance
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceField.innerText;
    const prevTotalBalance = parseFloat(totalBalanceString);


    if(newDepositAmount > 0){
        // step 5.1: adding new deposit to previous one
        const updatedDepositAmount = newDepositAmount + prevDepositAmount;
        
        // step 5.2: putting up the updated value in the deposit field
        prevDepositField.innerText = updatedDepositAmount.toFixed(2);
        

        // step 6.1: add new deposit to total balance
        const updatedBalanceAfterDeposit = prevTotalBalance + newDepositAmount;

        // step 6.2: putting up the updated value in the total balance field
        totalBalanceField.innerText = updatedBalanceAfterDeposit.toFixed(2);
    }
    else{
        alert('No money, no honey');
    }

    // step 7: clearing the new deposit field amount
    depositField.value = '';
})



/* Withdraw part */

// part 1: click event listener
document.getElementById('btn-withdraw-submit').addEventListener('click', function(){

    // part 2: get the value from withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    
    // part 3: get the previous withdraw balance
    const prevWithdrawField = document.getElementById('withdraw-total');
    const prevWithdrawAmountString = prevWithdrawField.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawAmountString);

    // part 4: get initial total balance
    const totalBalanceField = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceField.innerText;
    const prevTotalBalance = parseFloat(totalBalanceString);


    if(newWithdrawAmount > 0 && newWithdrawAmount < prevTotalBalance){
        // part 5.1: adding new withdraw to previous one
        const updatedWithdrawAmount = newWithdrawAmount + prevWithdrawAmount;

        // part 5.2: putting up the updated value in the withdraw field
        prevWithdrawField.innerText = updatedWithdrawAmount.toFixed(2);

        // part 6.1: adjusting withdraw amount with the total balance
        const updatedBalanceAfterWithdrawn = prevTotalBalance - newWithdrawAmount;

        // part 6.2: putting up the updated value in the total balance field
        totalBalanceField.innerText = updatedBalanceAfterWithdrawn.toFixed(2);
    }
    else if(newWithdrawAmount > prevTotalBalance){
        alert('Not a penny left in your bank!');
    }
    else{
        alert('Only money is valid.')
    }

    // step 7: clearing the withdraw field amount
    withdrawField.value = '';
})
