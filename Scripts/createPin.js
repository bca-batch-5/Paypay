const titleOne = document.getElementById(`titleOne`)
const titleTwo = document.getElementById(`titleTwo`)
const formBox = document.getElementById(`formBox`)
const loginBtn = document.getElementById(`loginBtn`)
const confirmBtn = document.getElementById(`btnConfirm`)
const titleImage = document.getElementById(`titleImage`)
const six =document.getElementById(`six`)

confirmBtn.addEventListener(`click`,()=>{
    titleOne.style.display=`none`;
    titleTwo.style.display=`block`;
    formBox.style.display= `none`;
    loginBtn.style.display=`block`;
    titleImage.style.display=`block`;
})


// disable button\


confirmBtn.disabled = true;

six.addEventListener(`input`, btnChange)

function btnChange() {
    if (six.value == "") {
        confirmBtn.disabled = true;
        confirmBtn.style.backgroundColor="#A9A9A999"
        confirmBtn.style.color="grey"
    }else{
        confirmBtn.disabled = false;
        confirmBtn.style.backgroundColor=`#6379F4`;
        confirmBtn.style.color=`white`
    }
    
}