
function checkValidation(){
const textBox = document.getElementById("textBox");
const text = textBox.value;
const mainText = document.getElementById("mainText");
if(text.length < 1){
    textBox.style.backgroundColor= "Pink"
    mainText.innerText = "Missing First name";
}
else{
   alert(text)
}
if(text.length > 1){
    textBox.style.backgroundColor= "White"
    mainText.innerText ="";
}
}