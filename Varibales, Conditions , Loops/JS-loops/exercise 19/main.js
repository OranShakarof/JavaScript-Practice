let sum = 0;

for(i=1; i<=10; i= i+1){
 let num = +prompt("Enter number");
    sum = sum + num;
}
const avg = sum / 10;
document.write(`The sum of the number is : ${sum} <br> The avg of the number is : ${avg}`);

