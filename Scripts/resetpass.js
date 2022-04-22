const pass  = document.getElementById("password")
const lock = document.getElementById("lock")
const pass2  = document.getElementById("password2")
const lock2 = document.getElementById("lock2")
const btnReset= document.getElementById("btnReset")
const btnEye1 =document.getElementById("btnEye1")
const btnEye2 =document.getElementById("btnEye2")

pass.addEventListener("input",() =>{
    if(pass.value == "") {
        lock.style.color=`#A9A9A999`;
        pass.style.borderBottomColor=`#A9A9A999`;
        pass.style.outline=`none`;
        btnEye1.style.color=`#A9A9A999`
    }else{
        lock.style.color=`#6379F4`;
        pass.style.borderBottomColor=`#6379F4`;
        pass.style.outline=`none`;
        pass.style.color=`black`;
        btnEye1.style.color=`#6379F4`

    }
 
})


pass2.addEventListener("input",() =>{
    if(pass2.value == "") {
        lock2.style.color=`#A9A9A999`;
        pass2.style.borderBottomColor=`#A9A9A999`;
        pass2.style.outline=`none`;
        btnEye2.style.color=`#A9A9A999`
    }else{
        lock2.style.color=`#6379F4`;
        pass2.style.borderBottomColor=`#6379F4`;
        pass2.style.outline=`none`;
        pass2.style.color=`black`;
        btnEye2.style.color=`#6379F4`
    }
 
})


btnEye1.addEventListener("click",() =>{
    if (pass.type == "password") {
        pass.type ="text";

    }else{
        pass.type ="password";
    }
})

btnEye1.addEventListener("click",() =>{
    const iconBtn1 =document.getElementById(`iconBtn1`)
    if (iconBtn1.classList.contains(`fa-eye-slash`)) {
        iconBtn1.classList.add(`fa-eye`)
        iconBtn1.classList.remove(`fa-eye-slash`)
    }else{
        iconBtn1.classList.add(`fa-eye-slash`)
        iconBtn1.classList.remove(`fa-eye`)
    }
})
btnEye2.addEventListener("click",() =>{
    if (pass2.type == "password") {
        pass2.type ="text";

    }else{
        pass2.type ="password";
    }
})

btnEye2.addEventListener("click",() =>{
    const iconBtn2 =document.getElementById(`iconBtn2`)
    if (iconBtn2.classList.contains(`fa-eye-slash`)) {
        iconBtn2.classList.add(`fa-eye`)
        iconBtn2.classList.remove(`fa-eye-slash`)
    }else{
        iconBtn2.classList.add(`fa-eye-slash`)
        iconBtn2.classList.remove(`fa-eye`)
    }
})


// disable button\


btnReset.disabled = true;

pass2.addEventListener(`input`, btnChange)

function btnChange() {
    if (pass2.value == "") {
        btnReset.disabled = true;
        btnReset.style.backgroundColor="#A9A9A999"
        btnReset.style.color="grey"
    }else{
        btnReset.disabled = false;
        btnReset.style.backgroundColor=`#6379F4`;
        btnReset.style.color=`white`
    }
    
}