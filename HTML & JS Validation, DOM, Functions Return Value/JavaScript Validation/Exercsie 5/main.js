
function checkValidation(){
const firstBox = document.getElementById("firstBox");
const firstName = firstBox.value;

const lastBox = document.getElementById("lastBox");
const lastName = lastBox.value;

const emailBox = document.getElementById("emailBox");
const email = emailBox.value;

const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const emailText = document.getElementById("emailText");

if(firstName.length < 1){
    firstBox.style.backgroundColor= "Pink"
    firstText.innerText = "Missing First name";
}
else if(lastName.length < 1){
    lastBox.style.backgroundColor= "Pink"
    lastText.innerText = "Missing last name";
}
else if(email.length<1){
    emailBox.style.backgroundColor= "Pink"
    emailText.innerText = "Missing Email";

}
else{
   alert(firstName + " " +lastName+" "+email);
}
if(firstName.length > 1){
    firstBox.style.backgroundColor= "White"
    firstText.innerText ="";
}
if(lastName.length > 1){
    lastBox.style.backgroundColor= "White"
    lastText.innerText ="";
}
if(email.length > 1){
    emailBox.style.backgroundColor= "White"
    emailText.innerText ="";

}
}