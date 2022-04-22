const email = document.getElementById("email")
const icon  = document.getElementById("envelope")
const btnConfirm =document.getElementById("btnConfirm")

email.addEventListener("click",() =>{
    email.style.outline=`none`;
})


email.addEventListener("input",() =>{
    if(email.value == "") {
        icon.style.color=`#A9A9A999`;
        email.style.borderBottomColor=`#A9A9A999`;
        email.style.outline=`none`;
    }else{
        icon.style.color=`#6379F4`;
        email.style.borderBottomColor=`#6379F4`;
        email.style.outline=`none`;
        email.style.color=`black`;
    }
    
})



// disable button\


btnConfirm.disabled = true;

email.addEventListener(`input`, btnChange)

function btnChange() {
    if (email.value == "") {
        btnConfirm.disabled = true;
        btnConfirm.style.backgroundColor="#A9A9A999"
        btnConfirm.style.color="grey"
    }else{
        btnConfirm.disabled = false;
        btnConfirm.style.backgroundColor=`#6379F4`;
        btnConfirm.style.color=`white`
    }
    
}