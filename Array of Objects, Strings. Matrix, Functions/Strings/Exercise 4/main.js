const password = prompt("Enter password: ");

strongPassword = true;

if(password.length < 6){
    document.write("Password isn't strong its too short" + "</br>");
    strongPassword = false;
}

if(password.search(/[A-Z]/) < 0){
    document.write("Your password needs upper case letter" + "<br>");
    strongPassword = false;
 }
if(password.search(/[a-z]/) < 0){
    document.write("Your password needs lower case letter" + "<br>");
    strongPassword = false;
}

if(password.search(/[0-9]/) < 0){
    document.write("Your password needs numbers" + "<br>");
    strongPassword = false;
}

if(password.search(/[!@#$%^&*]/) < 0){
    document.write("Your password needs signs"+ "<br>");
    strongPassword = false;
}    
if(strongPassword){
    document.write("Your Password is Strong");
}
      

