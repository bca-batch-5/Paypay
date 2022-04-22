const urlParams = new URLSearchParams(window.location.search);
const showNumber =document.getElementById("showNoPhone");
const messages = urlParams.get('message');
console.log(messages)
showNumber.innerHTML=messages;

