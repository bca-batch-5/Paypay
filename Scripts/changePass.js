const pass1 = document.getElementById(`password1`)
const pass2 = document.getElementById(`password2`)
const pass3 = document.getElementById(`password3`)
const lock1 = document.getElementById(`lock1`)
const lock2 = document.getElementById(`lock2`)
const lock3 = document.getElementById(`lock3`)
const btnEye1 = document.getElementById(`btnEye1`)
const btnEye2 = document.getElementById(`btnEye2`)
const btnEye3 = document.getElementById(`btnEye3`)
const changeHref = document.getElementById(`changeHref`)
const btnChange = document.getElementById(`btnChange`)
// bagian 1
pass1.addEventListener("input",() =>{
    if(pass1.value == "") {
        lock1.style.color=`#A9A9A999`;
        pass1.style.borderBottomColor=`#A9A9A999`;
        btnEye1.style.color=`#A9A9A999`;
    }else{
        lock1.style.color=`#6379F4`;
        pass1.style.borderBottomColor=`#6379F4`;
        pass1.style.color=`black`;
        btnEye1.style.color=`#6379F4`;
    }
 
})


btnEye1.addEventListener("click",() =>{
    if (pass1.type == "password") {
        pass1.type ="text";

    }else{
        pass1.type ="password";
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

// bagian 2
pass2.addEventListener("input",() =>{
    if(pass2.value == "") {
        lock2.style.color=`#A9A9A999`;
        pass2.style.borderBottomColor=`#A9A9A999`;
        btnEye2.style.color=`#A9A9A999`
    }else{
        lock2.style.color=`#6379F4`;
        pass2.style.borderBottomColor=`#6379F4`;
        pass2.style.color=`black`;
        btnEye2.style.color=`#6379F4`
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


// bagian 3
pass3.addEventListener("input",() =>{
    if(pass3.value == "") {
        lock3.style.color=`#A9A9A999`;
        pass3.style.borderBottomColor=`#A9A9A999`;
        btnEye3.style.color=`#A9A9A999`
    }else{
        lock3.style.color=`#6379F4`;
        pass3.style.borderBottomColor=`#6379F4`;
        pass3.style.color=`black`;
        btnEye3.style.color=`#6379F4`
    }
 
})


btnEye3.addEventListener("click",() =>{
    if (pass3.type == "password") {
        pass3.type ="text";

    }else{
        pass3.type ="password";
    }
})

btnEye3.addEventListener("click",() =>{
    const iconBtn3 =document.getElementById(`iconBtn3`)
    if (iconBtn3.classList.contains(`fa-eye-slash`)) {
        iconBtn3.classList.add(`fa-eye`)
        iconBtn3.classList.remove(`fa-eye-slash`)
    }else{
        iconBtn3.classList.add(`fa-eye-slash`)
        iconBtn3.classList.remove(`fa-eye`)
    }
})



// validasi password
btnChange.addEventListener(`click`,()=>{
    if (pass1.value != `abogoboga`) {
        alert(`password lama anda salah`);
        changeHref.href=`#`;
    }else{
        changeHref.href=`profil.html`;
    }
})

btnChange.addEventListener(`click`,()=>{
    if (pass3.value != pass2.value) {
        alert(`password anda salah`);
        changeHref.href=`#`;
    }else{
        changeHref.href=`profil.html`;
    }
})

btnChange.addEventListener(`click`,()=>{
    if (pass1.value ==true || pass3.value ==true) {
        alert(`password baru berhasil dibuat`);
    }
    
})


