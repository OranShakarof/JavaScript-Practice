
function showEmail(){
    const emailBox = document.getElementById("emailBox");
    const email = emailBox.value;
    if(email.length < 1){
        alert("Error");
    }
    else{
        alert(email);
    }

}

