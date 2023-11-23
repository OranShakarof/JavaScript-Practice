let n = 1;
while(n !== 0){
    n = +prompt("Enter number");
    if(n % 7 === 0){
        document.write( n + " divided by 7"+"<br>");
    }
    else {
        document.write( n +" not divided by 7" + "<br>");
    }
}