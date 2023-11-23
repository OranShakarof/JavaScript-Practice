const numbers = []; 
for(let i = 1; i<=100; i++){
    const num = Math.floor(Math.random() * 100) +1;
    numbers.push(num);
}

for(const item of numbers){
    document.write(item + " | ");
}

document.write("<hr>");

for(let i = numbers.length-1; i >= 0 ; i--){
    document.write(numbers[i] + " ");
}
document.write("<hr>");

let sum=0;
for(const item of numbers){
    sum+= item;
}
const avg = sum/100;
document.write(`The sum is: ${sum} <br>`);
document.write(`The average is: ${avg} <br>`);
document.write("<hr>");

for(const item of numbers){
    if(item % 2 === 0){
        document.write(item + " ");
    }
}
document.write("<hr>");
let countNeg = 0;
for(const item of numbers){
    if(item % 2 !== 0){
        countNeg+=1;
    }
}
document.write(`The number of negative numbers is: ${countNeg} <br>`);
document.write("<hr>");
let max = -Infinity;
let min = +Infinity;
for(const item of numbers){
    if(item > max){
        max = item;
    }
    if(item < min){
        min = item;
    }
}
document.write(`The Max number is: ${max} <br>`);
document.write(`The Min number is: ${min} <br>`);
document.write("<hr>");

document.write("Numbers above the average: ");
let belowAvg=0;
for(const item of numbers){
    if(item > avg){
        document.write(item + " ");
    }
    else{
        belowAvg+=1;
    }
}
document.write("<br>");
document.write("The amount of numbers below the average: " + belowAvg);
