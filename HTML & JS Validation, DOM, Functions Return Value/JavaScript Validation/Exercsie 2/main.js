
function checkValidation(){
const textBox = document.getElementById("textBox");
const text = textBox.value;
if(text.length < 1){
    textBox.style.backgroundColor= "Pink"
    alert("Missing First name");
}
else{
    alert(text);
}
if(text.length > 1){
    textBox.style.backgroundColor= "White"
}
}