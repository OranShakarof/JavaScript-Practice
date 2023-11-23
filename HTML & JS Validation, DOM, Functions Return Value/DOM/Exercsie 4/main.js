
function showFullName(){
    const firstBox = document.getElementById("firstBox");
    const lastBox = document.getElementById("lastBox");
    const firstName = firstBox.value;
    const lastName = lastBox.value;

    if(firstName.length < 1){
        alert("Missing First Name");
    }
    else if(lastName.length < 1){
        alert("Missing Last Name");
    }
    else{
        alert(firstName+ " " + lastName);
    }

}

