const email = document.getElementById("email")
const icon  = document.getElementById("envelope")
const pass  = document.getElementById("password")
const lock = document.getElementById("lock")
const username = document.getElementById("username")
const user =document.getElementById("user")
const btnEye = document.getElementById("btnEye")
const btnSignUp = document.getElementById("btnSignUp")
const aHref = document.getElementById("aHref")


username.addEventListener("input",() =>{
    if(username.value == "") {
        user.style.color=`#A9A9A999`;
        username.style.borderBottomColor=`#A9A9A999`;
        username.style.outline=`none`;
    }else{
        user.style.color=`#6379F4`;
        username.style.borderBottomColor=`#6379F4`;
        username.style.outline=`none`;
        username.style.color=`black`;
    }
    
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
        aHref.href ="createPin.html";
        return true;
    }else{
        username.style.borderBottomColor =`red`;
        user.style.color=`red`
        icon.style.color=`red`;
        email.style.borderBottomColor=`red`;
        lock.style.color=`red`;
        pass.style.borderBottomColor=`red`;
        btnEye.style.color=`red`;
        aHref.href ="#";
        alert(`email yang dimasukkan salah`)
    }
}


// disable button\


btnSignUp.disabled = true;

username.addEventListener(`input`, btnChange)
email.addEventListener(`input`, btnChange)
pass.addEventListener(`input`, btnChange)


function btnChange() {
    if (username.value == "" || email.value == "" || pass.value == "") {
        btnSignUp.disabled = true;
        btnSignUp.style.backgroundColor="#A9A9A999"
        btnSignUp.style.color="grey"
    }else{
        btnSignUp.disabled = false;
        btnSignUp.style.backgroundColor=`#6379F4`;
        btnSignUp.style.color=`white`
    }
    
}