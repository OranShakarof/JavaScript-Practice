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
const n = +prompt("Enter a number: ");
triangleNto1(n);
