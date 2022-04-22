const btnCont = document.getElementById(`btnCont`)
const closeBtn = document.getElementById(`closeBtn`)
const confirmPin = document.getElementById(`confirmPin`)

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