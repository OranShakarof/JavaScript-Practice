

function getAverage (num1,num2,num3){
    const avg = (num1+num2+num3) / 3;
    document.write("The Avg is: " + avg);
}

getAverage(10,20,30);
document.write("<hr>");
const n1= +prompt("Enter First number: ");
const n2= +prompt("Enter Second number: ");
const n3= +prompt("Enter Third number: ");

getAverage(n1,n2,n3);
document.write("<hr>");

const num1= Math.floor(Math.random()* 100) +1 ;
const num2= Math.floor(Math.random()* 100) +1 ;
const num3= Math.floor(Math.random()* 100) +1 ;
getAverage(num1,num2,num3);



