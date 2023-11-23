

function getMax (num1,num2,num3){
    if(num1 > num2 && num1 > num3) return num1;
    return num2>num3 ? num2:num3;
}

let max = getMax(10,20,30);
document.write(max);
document.write("<hr>");


const n1 = +prompt("Enter a number: ");
const n2 = +prompt("Enter a number: ");   
const n3 = +prompt("Enter a number: ");
document.write(n1+ " " + n2 + " " + n3 + "<br>");
max = getMax(n1,n2,n3);
document.write(max);
document.write("<hr>");

const num1= Math.floor(Math.random()* 100) +1 ;
const num2= Math.floor(Math.random()* 100) +1 ;
const num3= Math.floor(Math.random()* 100) +1 ;

document.write(num1+ " " + num2 + " " + num3 + "<br>");
max = getMax(num1,num2,num3);
document.write(max);
document.write("<hr>");





