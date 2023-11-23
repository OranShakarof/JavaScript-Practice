let num = +prompt("Enter your number");
let min = num;
for(i = 1; i <= 9; i = i + 1){
    num = +prompt("Enter your number");
    min = min < num ? min : num;
}
document.write("The min num is: " + min);