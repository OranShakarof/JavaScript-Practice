sumNeg = 0;
sumPos = 0;
for(i = 1; i <= 10; i = i + 1){
    const num = +prompt("Enter your number");
    if(num % 2 === 0){
        sumPos = sumPos + 1;
    }
    else{
        sumNeg = sumNeg + 1;
    }
}
document.write("The sum of neg numbers is: " + sumNeg + "<br>" + "The sum of pos numbers is: " + sumPos);