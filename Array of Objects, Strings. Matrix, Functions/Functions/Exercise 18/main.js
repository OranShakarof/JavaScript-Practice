

function print1ToN(n){
    for(let i = 1; i <=n; i++){
        document.write(i +" ")
    }
}

function printAsteriskOfN(n){
    for(let i = 1; i <= n; i++){
        document.write("* ");
    }
}

function printTriangleOfN(n){
    for(let i =n; i>= 1; i--){
        print1ToN(i);
        printAsteriskOfN(i);
        document.write("<br>");
    }
}

printTriangleOfN(4)

