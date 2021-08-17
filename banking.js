// handle deposit button event
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newInputAmount = parseFloat(inputAmountText); 
    //clear input field
    inputField.value = '';
    return newInputAmount;
   }

   function updateTotalField(totalFieldId,newDepoAmount){
    const totalElement = document.getElementById(totalFieldId);
    const prevAmountText = totalElement.innerText;
    const prevAmount = parseFloat(prevAmountText);
    const newAmountTotal = prevAmount + newDepoAmount;
    totalElement.innerText = newAmountTotal;
    return newAmountTotal;
   }

   function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    return prevBalanceTotal;
   }

   function updateBalance(newAmount, isAdd){
     const balanceTotal = document.getElementById('balance');
     /*
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText); */
    const prevBalanceTotal = getCurrentBalance();
    if(isAdd == true){
         balanceTotal.innerText = prevBalanceTotal + newAmount;
    }else{
        balanceTotal.innerText = prevBalanceTotal - newAmount;
    }
   }
document.getElementById('depo-btn').addEventListener
('click', function() {
    /*
     const depositInput = document.getElementById('depo-input');
    const newDepoAmountText = depositInput.value;
    const newDepoAmount = parseFloat(newDepoAmountText); 
    */
   
  
    //update deposit total
    /* const depositTotal = document.getElementById('depo-total');
    const prevDepoText = depositTotal.innerText;
    const prevDepoAmount = parseFloat(prevDepoText);
    const newDepoTotal = prevDepoAmount + newDepoAmount; */
    

    //update account balance
    /* const balanceTotal = document.getElementById('balance');
    const balanceTotalText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = prevBalanceTotal + newDepoAmount;
    balanceTotal.innerText = newBalanceTotal; */

    const newDepoAmount = getInputValue('depo-input');
    if(newDepoAmount > 0) {
        updateTotalField('depo-total', newDepoAmount);
        updateBalance(newDepoAmount, true);
    }
    

    /* //clear input field
    depositInput.value = ''; */

})

// handle withdraw event handler

document.getElementById('withdraw-btn').addEventListener
('click', function(){
   /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    

    //set withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawText = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawText);
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; */
    

    //update balance
    /* const balanceTotal = document.getElementById('balance');
    const prevBalanceText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceText);
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */

    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount)
        updateBalance(newWithdrawAmount, false);
    }
    

   /*  //clear withdraw input
    withdrawInput.value = ''; */
})