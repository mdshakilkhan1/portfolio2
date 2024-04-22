function addDiposit(){
    let depositAmount= document.getElementById('depositAmount');
    let Amount = depositAmount.value.trim();
    if(Amount == ''){
     alert('Please enter a Amount.....')
    }
    depositAmount.value= '';
 
    const currentDeposit =document.getElementById('currentDeposit');
    const balanceAmount =document.getElementById('balanceAmount');
    
 
    currentDeposit.innerText = Amount;
    const sum =Number( balanceAmount.innerText) + Number(Amount);
    balanceAmount.innerText = sum
 
    currentDeposit.appendChild(currentDeposit)
    balanceAmount.appendChild(balanceAmount)
    const balanc =document.getElementById('balanceAmount')
    
 
 }
 function addWidraw(){
     let withdrawAmount= document.getElementById('withdrawAmount');
     let Amounte = withdrawAmount.value.trim();
     if(Amounte == ''){
      alert('Please enter a Amount.....')
     }
     withdrawAmount.value= '';
  
     const withdraw =document.getElementById('withdraw');
     const balanceAmount =document.getElementById('balanceAmount');
     if (Number(Amounte) > Number(balanceAmount.innerText)) {

        alert('Insufficient Balance');
        currentWithdraw.innerText = 0;
        return;
    }
  
     withdraw.innerText = Amounte;
     balanceAmount.innerText = Number(balanceAmount.innerText) - Number(Amounte);
  
     withdraw.appendChild(withdraw)
     balanceAmount.appendChild(balanceAmount)

 }