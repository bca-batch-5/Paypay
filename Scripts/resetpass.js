const pass  = document.getElementById("password")
const lock = document.getElementById("lock")
const pass2  = document.getElementById("password2")
const lock2 = document.getElementById("lock2")

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

pass2.addEventListener("click",() =>{
    pass2.style.outline=`none`;
})

pass2.addEventListener("input",() =>{
    if(pass2.value == "") {
        lock2.style.color=`#A9A9A999`;
        pass2.style.borderBottomColor=`#A9A9A999`;
        pass2.style.outline=`none`;
    }else{
        lock2.style.color=`#6379F4`;
        pass2.style.borderBottomColor=`#6379F4`;
        pass2.style.outline=`none`;
        pass2.style.color=`black`;

    }
 
})