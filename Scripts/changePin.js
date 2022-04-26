const btnChange = document.getElementById(`btnChange`)
const changeHref =document.getElementById(`changeHref`)
const first =document.getElementById(`first`)
const sec =document.getElementById(`sec`)
const third =document.getElementById(`third`)
const fourth =document.getElementById(`fourth`)
const fifth =document.getElementById(`fifth`)
const six =document.getElementById(`six`)


btnChange.addEventListener(`click`,()=>{
    if (first.value != `1` || sec.value != `2` || third.value != `3` || fourth.value !=`4` || fifth.value !=`5` || six.value !=`6`) {
        changeHref.href=`#`;
        alert(`pin yang anda masukkan salah`)
    }else{
        changeHref.href=`newPin.html`
    }
})
