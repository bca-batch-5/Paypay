const email = document.getElementById(`email`)
const icon  = document.getElementById(`envelope`)
const pass  = document.getElementById(`password`)
const lock = document.getElementById(`lock`)


email.addEventListener("click",() =>{
    icon.style.color=`#6379F4`;
    email.style.borderBottomColor=`#6379F4`;
    email.style.outline=`none`;
    email.style.color=`black`;
})

email.addEventListener("change",() =>{
    if(email.value == "") {
        icon.style.color=`#A9A9A999`;
        email.style.borderBottomColor=`#A9A9A999`;
        email.style.outline=`none`;
    }
 
})

pass.addEventListener("click",() =>{
    lock.style.color=`#6379F4`;
    pass.style.borderBottomColor=`#6379F4`;
    pass.style.outline=`none`;
    pass.style.color=`black`;
})

pass.addEventListener("change",() =>{
    if(pass.value == "") {
        lock.style.color=`#A9A9A999`;
        pass.style.borderBottomColor=`#A9A9A999`;
        pass.style.outline=`none`;
    }
 
})


// bagian merubah view password
