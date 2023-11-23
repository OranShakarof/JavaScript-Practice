
function paintBoxRandomly(boxObject){
    const num = Math.floor(Math.random() *6) +1;
    switch(num){
        case 1:
        boxObject.style.backgroundColor = "Red";
        break;
        case 2:
        boxObject.style.backgroundColor = "Green";
        break;
        case 3:
        boxObject.style.backgroundColor = "Blue";
        break;
        case 4: 
        boxObject.style.backgroundColor = "Yellow";
        break;
        case 5:
        boxObject.style.backgroundColor = "White";
        break;
        case 6:
        boxObject.style.backgroundColor = "Purple";
        break;
    } 

}