const titleOne = document.getElementById(`titleOne`)
const titleTwo = document.getElementById(`titleTwo`)
const formBox = document.getElementById(`formBox`)
const loginBtn = document.getElementById(`loginBtn`)
const confirmBtn = document.getElementById(`btnConfirm`)
const titleImage = document.getElementById(`titleImage`)


confirmBtn.addEventListener(`click`,()=>{
    titleOne.style.display=`none`;
    titleTwo.style.display=`block`;
    formBox.style.display= `none`;
    loginBtn.style.display=`block`;
    titleImage.style.display=`block`;
})