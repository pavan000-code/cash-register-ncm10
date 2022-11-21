const billInput=document.querySelector("#bill-input");
const billBtn=document.querySelector("#bill-verify");

const cashDiv=document.querySelector(".cash-div")
const cashInput=document.querySelector("#cash-input");
const cashBtn=document.querySelector("#cash-verify");

const messageDiv=document.querySelector(".main-message");
const message=document.querySelector("#output-short");

const outputDiv=document.querySelector(".main-output")
const noteQuantity=document.querySelectorAll(".note-quantity");

const availableCash=[2000,500,100,20,10,5,1];
const showCashDiv=()=>{
    cashDiv.style.display="block";
}
const hideCashDiv=()=>{
    cashDiv.style.display="none";
}
const showMessageDiv=()=>{
    messageDiv.style.display="block";
}
const hideMessageDiv=()=>{
    messageDiv.style.display="none";
}
const showOutputDiv=()=>{
    outputDiv.style.display="block";
}
const hideOutputDiv=()=>{
    outputDiv.style.display="none";
}
const showMessage=(msg)=>{
    showMessageDiv();
    message.innerText=msg;
}
const processor=(amount)=>{
    for(let i=0;i<availableCash.length;i++){
        let number=Math.trunc(amount/availableCash[i]);
        amount = amount%availableCash[i];
        noteQuantity[i].innerText=number;
    }    
}
const billHandler=()=>{
    let billAmt=billInput.value;
    if(billAmt>0){
        billBtn.style.display="none";
        showCashDiv();
        hideMessageDiv();
    }else{
        showMessage("Please enter proper bill amount (negative values and empty values not allowed)");
    }
}
const cashHandler=()=>{
    let cashAmt=Number(cashInput.value);
    let billAmt=Number(billInput.value);
    if(cashAmt>0 && billAmt>0){
        let finalAmt=parseInt(cashAmt-billAmt);
        if(finalAmt>0){
        showMessage(`The change returned is ${finalAmt}.See the table below for more info`);
        processor(finalAmt);
        showOutputDiv();       
    }else if(finalAmt===0){
        showMessage(`The change returned is ${finalAmt}.`)
        hideOutputDiv()
    }
    else {
        showMessage("Please enter cash amount atleast equal to the bill amount.Try again"); 
        hideOutputDiv();
    }
    }else{
        showMessage("Please enter proper bill amount (negative values and empty values not allowed)");
        hideOutputDiv();
    }
}
billBtn.addEventListener("click",billHandler);
cashBtn.addEventListener("click",cashHandler);