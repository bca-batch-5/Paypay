const notifMenu = document.getElementById(`notifMenu`)

function funcBell(){
    if(notifMenu.style.display ==`block`){
        closeNav();
      }else{
        openNav();
    }
}


function openNav(){
    document.getElementById("notifMenu").style.display = "block";


}

function closeNav(){
    document.getElementById(`notifMenu`).style.display = `none`;

}