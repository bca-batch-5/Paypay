const email = document.getElementById("email")
const icon  = document.getElementById("envelope")
const pass  = document.getElementById("password")
const lock = document.getElementById("lock")
const btnEye = document.getElementById("btnEye")
const alertId = document.getElementById("alert")
const btnLogin = document.getElementById("btnLogin")
const aHref = document.getElementById("aHref")

email.addEventListener("click",() =>{
    alertId.style.display=`none`;
    
})

pass.addEventListener("click",() =>{
    alertId.style.display=`none`;
    
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



pass.addEventListener("input",() =>{
    if(pass.value == "") {
        lock.style.color=`#A9A9A999`;
        pass.style.borderBottomColor=`#A9A9A999`;
        pass.style.outline=`none`;
        btnEye.style.color=`#A9A9A999`
    }else{
        lock.style.color=`#6379F4`;
        pass.style.borderBottomColor=`#6379F4`;
        pass.style.outline=`none`;
        pass.style.color=`black`;
        btnEye.style.color=`#6379F4`
    }
 
})


// bagian merubah view password

btnEye.addEventListener("click",() =>{
    if (pass.type == "password") {
        pass.type ="text";

    }else{
        pass.type ="password";
    }
})

btnEye.addEventListener("click",() =>{
    const iconBtn =document.getElementById(`iconBtn`)
    if (iconBtn.classList.contains(`fa-eye-slash`)) {
        iconBtn.classList.add(`fa-eye`)
        iconBtn.classList.remove(`fa-eye-slash`)
    }else{
        iconBtn.classList.add(`fa-eye-slash`)
        iconBtn.classList.remove(`fa-eye`)
    }
})


// bagian validasi email

function validationEmail() {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(format) ) {
        return true;
    }else{
        icon.style.color=`red`;
        email.style.borderBottomColor=`red`;
        lock.style.color=`red`;
        pass.style.borderBottomColor=`red`;
        btnEye.style.color=`red`;
        alertId.style.display=`block`;
        aHref.href ="#";
    }
}

// bagian disabled button

btnLogin.disabled = true;

email,pass.addEventListener(`input`, btnChange)

function btnChange() {
    if (pass.value == "") {
        btnLogin.disabled = true;
        btnLogin.style.backgroundColor="#A9A9A999"
        btnLogin.style.color="grey"
        alertId.style.display=`none`
    }else{
        btnLogin.disabled = false;
        btnLogin.style.backgroundColor=`#6379F4`;
        btnLogin.style.color=`white`
    }
    
}