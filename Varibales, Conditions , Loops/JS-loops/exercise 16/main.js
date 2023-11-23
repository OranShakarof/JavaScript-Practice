let n = +prompt("Enter number");
while(n !== 0){
    if(n % 7 === 0){
        document.write( n + " divided by 7"+"<br>");
    }
    else {
        document.write( n +" not divided by 7" + "<br>");
    }
    n = +prompt("Enter number");
}