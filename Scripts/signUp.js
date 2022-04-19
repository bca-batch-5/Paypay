const email = document.getElementById("email")
const icon  = document.getElementById("envelope")
const pass  = document.getElementById("password")
const lock = document.getElementById("lock")
const username = document.getElementById("username")
const user =document.getElementById("user")
const btnEye = document.getElementById("btnEye")

username.addEventListener("click",() =>{
    username.style.outline=`none`;
})


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


pass.addEventListener("click",() =>{
    pass.style.outline=`none`;
})

pass.addEventListener("input",() =>{
    if(pass.value == "") {
        lock.style.color=`#A9A9A999`;
        pass.style.borderBottomColor=`#A9A9A999`;
        pass.style.outline=`none`;
    }else{
        lock.style.color=`#6379F4`;
        pass.style.borderBottomColor=`#6379F4`;
        pass.style.outline=`none`;
        pass.style.color=`black`;

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