
function checkValidation(){
const textBox = document.getElementById("textBox");
const text = textBox.value;
if(text.length < 1){
    alert("Missing First name");
}
else{
    alert(text);
}
}