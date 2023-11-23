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

function printCountRectangles(count){
    for(let i = 1; i<= count ; i++){
        const height = Math.floor(Math.random() *10) +2 ;
        const width =  Math.floor(Math.random() *10) + 2 ;
        printRectangle(width,height);
        document.write("<br>");
    }
    
}
printCountRectangles(4);
document.write("<hr>");

const n = +prompt("Enter number");
printCountRectangles(n);