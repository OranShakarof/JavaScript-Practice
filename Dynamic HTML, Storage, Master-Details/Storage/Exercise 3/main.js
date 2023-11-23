onLoad();
function changeBackgroundColor(){
    // Take HTML elements
    const bodyBg = document.getElementById("bodyBg");
    const colorBox = document.getElementById("colorBox");
    // Take the value
    const color = colorBox.value;
    
    // Change the BackGround color
    bodyBg.style.backgroundColor = color;

    // Storage the color
    localStorage.setItem("color" , color);


}

function onLoad(){
    // Take HTML elements
    const bodyBg = document.getElementById("bodyBg");

    // Take form the Storage the last color that was chosen
    const color = localStorage.getItem("color");

    //change to BackGround color to last color was chosen
    bodyBg.style.backgroundColor = color;
}