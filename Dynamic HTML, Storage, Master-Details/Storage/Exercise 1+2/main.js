function saveToStorage(){
   // Take HTML Elements
   const cityBox = document.getElementById("cityBox");
   const streetBox = document.getElementById("streetBox");
   const homeNumberBox = document.getElementById("homeNumberBox");
   const posteCodeBox = document.getElementById("posteCodeBox");

    // Take Values
    const city = cityBox.value;
    const street = streetBox.value;
    const homeNumber = +homeNumberBox.value;
    const posteCode = +posteCodeBox.value;

   //Validation City:
   if(cityBox.value === ""){
    cityBox.style.backgroundColor ="Red";
    alert("Missing city");
    return
}
   if(cityBox.value !== ""){
    cityBox.style.backgroundColor ="White";
   }

   //Validation Street:
   if(streetBox.value === ""){
    streetBox.style.backgroundColor ="Red";
    alert("Missing street");
    return
}
   if(streetBox.value !== ""){
    streetBox.style.backgroundColor ="White";
}

   //Validation Home Number:
   if(homeNumberBox.value === ""){
    homeNumberBox.style.backgroundColor ="Red";
    alert("Missing Home number");
    return
}
   if(homeNumber < 1){
    homeNumberBox.style.backgroundColor ="Red";
    alert("Wrong Home number");
    return
}   
   if(homeNumber >=1 && homeNumberBox.value !== "" ){
    homeNumberBox.style.backgroundColor ="White";
}

   //Validation Poste code:
   if(posteCodeBox.value === ""){
    posteCodeBox.style.backgroundColor = "Red";
    alert("Missing Poste code");
    return
}
   if(posteCode < 1){
    posteCodeBox.style.backgroundColor = "Red";
    alert("Wrong Poste code");
    return
}
   if(posteCode >= 1 && posteCodeBox.value !== ""){
    posteCodeBox.style.backgroundColor = "White";
}
   
    //Create an object
    const address = {city , street , homeNumber, posteCode};

    //Create JSON and save to local Storage
    const json =  JSON.stringify(address);
    localStorage.setItem("address", json);
    
}

function loadFromStorage(){
    // Take HTML Elements
   const cityBox = document.getElementById("cityBox");
   const streetBox = document.getElementById("streetBox");
   const homeNumberBox = document.getElementById("homeNumberBox");
   const posteCodeBox = document.getElementById("posteCodeBox");

    //Create Json to get the data form the storage
    const json = localStorage.getItem("address");
    const address = JSON.parse(json);

    //Load the data to the boxes
    cityBox.value = address.city;
    streetBox.value = address.street;
    homeNumberBox.value = address.homeNumber;
    posteCodeBox.value = address.posteCode;


}