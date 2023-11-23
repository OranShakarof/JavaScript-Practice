let num = +prompt("Enter your number");
let sum = 0;
let rightDigit = 0;
while(num !== 0){
    rightDigit = num % 10;
    sum = sum +rightDigit;
    num = (num - rightDigit) / 10 ;
}
document.write(sum);