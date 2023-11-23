let num = +prompt("Enter your number");
let max = num;
for(i = 1; i <= 9; i = i + 1){
    num = +prompt("Enter your number");
    max = max < num ? num : max;
}
document.write("The max num is: " + max);