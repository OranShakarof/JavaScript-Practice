let num1 = +prompt("Enter Number");
let num2 = +prompt("Enter Number");
let temp;

if(num1 < num2){

}

else{
    temp = num2;
    num2 = num1;
    num1 = temp;
}
for(i = num1; i <= num2; i = i +1){
    document.write(i + " ");
}