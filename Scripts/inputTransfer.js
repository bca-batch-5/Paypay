const nominal = document.getElementById(`nominal`)
const notes = document.getElementById(`notes`)
const pen =document.getElementById("pen")
const inputNotes =document.getElementById("inputNotes")

nominal.addEventListener("input",() =>{
    if (nominal.value !=="") {
        nominal.style.color=`#6379F4`;
    }
})

notes.addEventListener("input",() =>{
    if (notes.value !=="") {
        inputNotes.style.borderColor=`#6379F4`;
        pen.style.color="#6379F4"
    }
})
