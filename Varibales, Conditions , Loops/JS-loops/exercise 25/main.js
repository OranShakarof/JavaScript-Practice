let num = +prompt("Enter number");
let countDigit = 0;

if (num === 0) {
  num = 1;
} 

 while (num !== 0) {
    countDigit = countDigit + 1;
    num = parseInt(num / 10);
}

document.write(countDigit);
