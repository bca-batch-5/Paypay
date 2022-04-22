const btnCont = document.getElementById(`btnCont`)
const closeBtn = document.getElementById(`closeBtn`)
const btnPin =document.getElementById(`btnPin`)
const confirmPin = document.getElementById(`confirmPin`)
const contHref =document.getElementById(`contHref`)
const first =document.getElementById(`first`)
const sec =document.getElementById(`sec`)
const third =document.getElementById(`third`)
const fourth =document.getElementById(`fourth`)
const fifth =document.getElementById(`fifth`)
const six =document.getElementById(`six`)

btnCont.addEventListener(`click`,()=>{
    if (confirmPin.style.display = `none`) {
        confirmPin.style.display=`block`
    }
})

closeBtn.addEventListener(`click`,()=>{
    if (confirmPin.style.display = `block`) {
        confirmPin.style.display=`none`
    }
})


btnPin.addEventListener(`click`,()=>{
    if (first.value != `1` || sec.value != `2` || third.value != `3` || fourth.value !=`4` || fifth.value !=`5` || six.value !=`6`) {
        contHref.href=`statusFailed.html`;
    }else{
        contHref.href=`statusSuccess.html`
    }
})