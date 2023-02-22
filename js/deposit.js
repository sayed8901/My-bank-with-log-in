// step 1: adding event listener on 'deposit' button
document.getElementById('btn-deposit-submit').addEventListener('click', function(){
    // step 2.1: get the new deposit amount from deposit input field
    const newDepositAmount = getElementDataById('deposit-field');

    // step 3.1: get the previous deposit balance amount
    const previousDepositAmount = getElementTextDataById('deposit-total');

    // step 3.2: get the present total balance amount
    const presentTotalBalance = getElementTextDataById('balance-total');
    
    if(newDepositAmount > 0){
        // step 4.1: adding new deposit to previous deposit
        const updatedDepositBalance = newDepositAmount + previousDepositAmount;

        // step 4.2: resetting the deposit balance with updated one
        balanceResetById('deposit-total', updatedDepositBalance);


        // step 5.1: adding new deposit to total balance
        const updatedBalanceAfterNewDeposit = presentTotalBalance + newDepositAmount;

        // step 5.2: resetting the total balance amount
        balanceResetById('balance-total', updatedBalanceAfterNewDeposit);
    }
    else{
        alert('please input valid amount!!')
    }
})
