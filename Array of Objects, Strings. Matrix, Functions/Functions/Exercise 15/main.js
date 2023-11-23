
function printRectangleBase(width){
    for(let i = 1; i <= width ; i++){
        document.write("* ");
    }
    document.write("<br>");
}


function printSpaces(width){
    for(let i = 1; i <= width-2; i++){
        document.write("&nbsp;&nbsp;");
    }
}

function printRectangle(height,width){
   for(let i = 1; i <= height; i++){
    if(i === 1 || i === height){
        printRectangleBase(width);
    }
    else{
        document.write("* ");
        printSpaces(width);
        document.write("*");
        document.write("<br>");
    }
   }
}

printRectangle(4,6);
document.write("<hr>");

const height = Math.floor(Math.random() *10 ) + 2 ;
const width = Math.floor(Math.random() *10 ) + 2 ;
printRectangle(height,width);
document.write("<hr>");

const h = +prompt("Enter height of the rectangle: ");
const w = +prompt("Enter width of the rectangle: ");
printRectangle(h,w);