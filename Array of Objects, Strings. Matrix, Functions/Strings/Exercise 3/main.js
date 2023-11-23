const phoneNumber = prompt("Enter Phone number: ");
const firstTwoNum = phoneNumber.substring(0,2);
if(firstTwoNum === "05" && phoneNumber.length === 10){
    document.write("Legal Phone number");
}
else{
    document.write("Illegal Phone number");
}