// handle deposit button event
function getInputValue(){
    const depositInput = document.getElementById('depo-input');
    const newDepoAmountText = depositInput.value;
    const newDepoAmount = parseFloat(newDepoAmountText); 
    //clear input field
    depositInput.value = '';
    return newDepoAmount;
    
   }
document.getElementById('depo-btn').addEventListener
('click', function() {
    /*
     const depositInput = document.getElementById('depo-input');
    const newDepoAmountText = depositInput.value;
    const newDepoAmount = parseFloat(newDepoAmountText); 
    */
   const newDepoAmount = getInputValue();
  
    //update deposit total
    const depositTotal = document.getElementById('depo-total');
    const prevDepoText = depositTotal.innerText;
    const prevDepoAmount = parseFloat(prevDepoText);
    const newDepoTotal = prevDepoAmount + newDepoAmount;
    depositTotal.innerText = newDepoTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = prevBalanceTotal + newDepoAmount;
    balanceTotal.innerText = newBalanceTotal;

    /* //clear input field
    depositInput.value = ''; */

})

// handle withdraw event handler

document.getElementById('withdraw-btn').addEventListener
('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawText = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawText);
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceText);
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value = '';
})