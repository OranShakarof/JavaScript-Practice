

function printNto1(n){
    for(let i = n-1; i>= 1; i--){
        document.write(i +" ")
    }

}
function printSpaces(n){
    for(let i = 1; i <= n; i++){
        document.write("&nbsp;&nbsp;");
    }
}


function printPyramid(n){
    let p = n;
    for(let i = 1; i<=n ; i++){
        printSpaces(p);
        for(let j = 1; j <= i; j++){

            document.write(j + " ");
        }
         printNto1(i);
         document.write("<br>");
         p-=1;
     }
}

const n = +prompt("Enter Number");
printPyramid(n);

