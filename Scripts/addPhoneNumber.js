const noTelpInput = document.getElementById("inputNoTelp");
const borderInput = document.getElementById("borderBawah");
const bodyPhone = document.getElementById("test");
const gambarTelp = document.getElementById("gambarPhone");
const buttonAdd = document.getElementById("buttonAddPhone");
const buttonLink = document.getElementById("buttonHref");
let showNumber = document.getElementById("showNoPhone");

noTelpInput.addEventListener("click", () => {
  gambarTelp.src = "./Assets/PhoneVector.png";
  borderInput.style.borderBottom = "1px blue solid";
});

noTelpInput.addEventListener("input", () => {
  if (noTelpInput.value != "") {
    buttonAdd.style.cursor = "pointer";
    buttonAdd.style.backgroundColor = "#6379F4";
    buttonAdd.style.color = "white";
    buttonLink.href = "managePhoneNumber.html?message=" + noTelpInput.value;
    console.log(noTelpInput.value);
    gambarTelp.src = "./Assets/PhoneVector.png";
    borderInput.style.borderBottom = "1px blue solid";
  } else {
    gambarTelp.src = "./Assets/phone-black.png";
    borderInput.style.borderBottom = "1.5px solid rgba(169, 169, 169, 0.6)";
    buttonAdd.style.cursor = "not-allowed";
    buttonAdd.style.backgroundColor = "#e5e8ed";
    buttonAdd.style.color = "#88888f";
  }
});