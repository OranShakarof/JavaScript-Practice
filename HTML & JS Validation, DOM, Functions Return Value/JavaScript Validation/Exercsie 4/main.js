
function checkValidation(){
const firstBox = document.getElementById("firstBox");
const firstName = firstBox.value;

const lastBox = document.getElementById("lastBox");
const lastName = lastBox.value;

const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");

if(firstName.length < 1){
    firstBox.style.backgroundColor= "Pink"
    firstText.innerText = "Missing First name";
}
else if(lastName.length < 1){
    lastBox.style.backgroundColor= "Pink"
    lastText.innerText = "Missing last name";
}
else{
   alert(firstName + " " +lastName)
}
if(firstName.length > 1){
    firstBox.style.backgroundColor= "White"
    firstText.innerText ="";
}
if(lastName.length > 1){
    lastBox.style.backgroundColor= "White"
    lastText.innerText ="";
}
}