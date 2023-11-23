const num = +prompt("Enter your number");

if(num < 0){
    document.write("Negative");
}

else if(num === 0){
    document.write("zero");
}

else if (num <=100){
    document.write("1 to 100");
}

else if(num <= 1000){
    document.write("101 to 1000");
}
else{
    document.write("Over 1000");
}