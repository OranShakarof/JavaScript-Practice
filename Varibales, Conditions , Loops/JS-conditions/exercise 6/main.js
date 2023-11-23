const grade = +prompt("Enter your grade");

if(grade <= 59 && grade >= 0){
    document.write("Failed");
}

else if(grade <= 69){
    document.write("Enough");
}

else if(grade <= 79){
    document.write("Almost good");
}

else if(grade <=89){
    document.write("Good");
}

else if(grade <= 99){
    document.write("Great");
}
else{
    document.write("Excellent");
}