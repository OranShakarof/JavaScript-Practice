function printNto1(n){
    for(let i = n; i >= 1 ; i--){
        document.write(i + " ");
    }
}
function triangleNto1(size){
    for(let i = size; i >= 1; i--){
        printNto1(i);
        document.write("<br>");
    }
}
const n = +prompt("Enter a number: ");
triangleNto1(n);