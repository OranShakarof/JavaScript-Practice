
function paintButtonAndGetThirdPower(buttonObject){
    buttonObject.style.backgroundColor = "Blue";
    const textBox = document.getElementById("textBox");
    const text = textBox.value;
    alert(text ** 3);

}