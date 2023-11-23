function checkForm(){
    const firstBox = document.getElementById("firstBox");
    const firstName = firstBox.value;

    const lastBox = document.getElementById("lastBox");
    const lastName = lastBox.value;

    const msgBox = document.getElementById("msg");
    const massage = msgBox.value;

    if(firstName.length < 1){
        firstBox.style.backgroundColor = "Pink"
        alert("חסר שם פרטי");
        event.preventDefault();
        return;
    }
    if(lastName.length < 1){
        lastBox.style.backgroundColor = "Pink"
        alert("חסר שם משפחה");
        event.preventDefault();
        return;
    }
    if(massage.length < 1){
        msgBox.style.backgroundColor = "Pink"
        alert("חסרה הודעה");
        event.preventDefault();
        return;
    }

    alert(firstName + " " + lastName +" " + massage);
}
