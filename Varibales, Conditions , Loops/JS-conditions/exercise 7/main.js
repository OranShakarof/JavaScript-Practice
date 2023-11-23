const num1 = +prompt("Enter number");
const num2 = +prompt("Enter number");
const num3 = +prompt("Enter number");

if(num1 > num2 && num1>num3){
    document.write(num1);
}

else if (num2 > num1 && num2 > num3){
    document.write(num2);
}

else{
    document.write(num3);
}