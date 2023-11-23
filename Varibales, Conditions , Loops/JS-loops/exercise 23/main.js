sumNeg = 0;
sumPos = 0;
let num = +prompt("Enter your number");
while(num > 0 ){
    if(num % 2 === 0){
        sumPos = sumPos + 1;
    }
    else{
        sumNeg = sumNeg + 1;
    }
    num = +prompt("Enter your number");
}
document.write("The sum of neg numbers is: " + sumNeg + "<br>" + "The sum of pos numbers is: " + sumPos);