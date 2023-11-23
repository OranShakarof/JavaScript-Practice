
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
else if(firstName.length < 2){
    firstBox.style.backgroundColor= "Pink"
    firstText.innerText = "First Name too Short";
}
else if(firstName.length > 30 ){
    firstBox.style.backgroundColor= "Pink"
    firstText.innerText = "First Name too Long";
}
else if(lastName.length < 1){
    lastBox.style.backgroundColor= "Pink"
    lastText.innerText = "Missing last name";
}
else if(lastName.length < 2){
    lastBox.style.backgroundColor= "Pink"
    lastText.innerText = "Last name too Short";
}
else if(lastName.length > 30){
    lastBox.style.backgroundColor= "Pink"
    lastText.innerText = "Last name too Long";
}

else if(email.length<1){
    emailBox.style.backgroundColor= "Pink"
    emailText.innerText = "Missing Email";
}
else if(email.length< 2){
    emailBox.style.backgroundColor= "Pink"
    emailText.innerText = "Email too Short";
}
else if(email.length > 30){
    emailBox.style.backgroundColor= "Pink"
    emailText.innerText = "Email too long";
}

else{
   alert(firstName + " " +lastName+" "+email);
}

//Change Back After Validation
if(firstName.length > 2 && firstName.length <= 30 ){
    firstBox.style.backgroundColor= "White"
    firstText.innerText ="";
}
if(lastName.length > 2 && lastName.length <=30){
    lastBox.style.backgroundColor= "White"
    lastText.innerText ="";
}
if(email.length > 2 && email.length <=30){
    emailBox.style.backgroundColor= "White"
    emailText.innerText ="";

}
}