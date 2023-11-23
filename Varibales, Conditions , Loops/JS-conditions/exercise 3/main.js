const age = +prompt("Enter your age");

if(age >= 16){
    document.write("Can do drivers license")
}
else{
    document.write(`You have to wait ${16-age} years`);
}