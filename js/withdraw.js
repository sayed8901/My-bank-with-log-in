// step 1: adding event listener on 'Withdraw' button
document.getElementById('btn-withdraw-submit').addEventListener('click', function(){
    // step 2.1: get the new Withdraw amount from Withdraw input field
    const newWithdrawAmount = getElementDataById('withdraw-field');

    // step 3.1: get the previous Withdraw balance amount
    const previousWithdrawAmount = getElementTextDataById('withdraw-total');

    // step 3.2: get the present total balance amount
    const presentTotalBalance = getElementTextDataById('balance-total');
    
    if(newWithdrawAmount > 0 && newWithdrawAmount <= presentTotalBalance){
        // step 4.1: adding new Withdraw to previous Withdraw
        const updatedWithdrawBalance = newWithdrawAmount + previousWithdrawAmount;

        // step 4.2: resetting the Withdraw balance with updated one
        balanceResetById('withdraw-total', updatedWithdrawBalance);


        // step 5.1: adjusting new Withdraw to total balance
        const updatedBalanceAfterNewWithdraw = presentTotalBalance - newWithdrawAmount;

        // step 5.2: resetting the total balance amount
        balanceResetById('balance-total', updatedBalanceAfterNewWithdraw);
    }
    else if(newWithdrawAmount > presentTotalBalance){
        alert('Not enough balance')
    }
    else{
        alert('please input valid amount!!')
    }
})
