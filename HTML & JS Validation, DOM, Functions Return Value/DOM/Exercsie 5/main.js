function showEmail(){
    const emailBox = document.getElementById("emailBox");
    const email = emailBox.value;
    const mainText = document.getElementById("mainText");
    if(email.length < 1){
        emailBox.style.backgroundColor = "Red";
        mainText.innerText = "Error Missing Email";
    }
    else{
        alert(email);
    }

}


