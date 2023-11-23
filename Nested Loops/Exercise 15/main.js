let num = +prompt("Enter a number:");
let countDigit = 0;
let rightDigit = 0;
while(num > 0){
    while (num > 0){
        
        rightDigit = num % 10;
        countDigit+=1;
        num = (num - rightDigit ) / 10 ;
    
    }
    document.write(countDigit+ " ");
    num = +prompt("Enter a number:");
    countDigit = 0;
    rightDigit= 0;
}
