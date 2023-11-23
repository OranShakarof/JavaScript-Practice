function printWidth(w){
    for(let i = 1; i <= w; i++){
        document.write("* ");
    }
    document.write("<br>");
    
}

function printRectangle(h,w) {
    for(let i = 1; i <=h; i++){
        printWidth(w);
    }
}

printRectangle(6,7);

document.write("<hr>");
const height = +prompt("Enter height of rectangle: ");
const width = +prompt("Enter width of rectangle: ");
printRectangle(height,width);
document.write("<hr>");


const randomWidth =  Math.floor(Math.random() * 20 ) +1 ;
const randomHeight = Math.floor(Math.random() * 20 ) +1 ;
printRectangle(randomHeight,randomWidth);