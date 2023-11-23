

function printNto1(n){
    for(let i = n; i >= 1 ; i--){
        document.write("* ");
    }
}
function triangleNto1(n){
    for(let i = n; i >= 1; i--){
        printNto1(i);
        document.write("<br>");
    }
}

function print1toN(n){
    for(let i=1; i <=n; i++){
        document.write("* ");
    }
}
function triangle1toN(n){
    for(let i = 1; i<=n; i++){
        print1toN(i);
        document.write("<br>");
    }
}

function printMirrorTriangle(n){
    triangleNto1(n);
    triangle1toN(n);
    
}
const n = +prompt("Enter a number: ");
printMirrorTriangle(n);