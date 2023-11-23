
loadFormStorage();

function addToStorage(){
    //Take HTML Elements
    const petSpeciesBox = document.getElementById("petSpeciesBox");
    const petNameBox = document.getElementById("petNameBox");
    const petAgeBox = document.getElementById("petAgeBox");
    const petPictureBox = document.getElementById("petPictureBox");

    //Take Values
    const petSpecies = petSpeciesBox.value;    
    const petName = petNameBox.value;
    const petAge = petAgeBox.value;
    const petPicture = petPictureBox.value;    
    
    //Create pet object
    const pet = {petSpecies, petName, petAge, petPicture};

    //Get the pets Array for The Storage:
    let json = localStorage.getItem("pets");
    const pets = json ? JSON.parse(json) : [];

    //Push the new pet to array
    pets.push(pet);

    //Send back the array to Storage
    json = JSON.stringify(pets);
    localStorage.setItem("pets" , json);

    //Display the load array
    loadFormStorage();

    //Clear Boxes
    petSpeciesBox.value = "";
    petNameBox.value = "";
    petAgeBox.value = "";
    petPictureBox.value = "";
    petSpeciesBox.focus();
}



function loadFormStorage(){
    //Take HTML Element
    const tableDiv = document.getElementById("tableDiv");

    //Get The the json array from Storage
    const json = localStorage.getItem("pets");
    const pets = JSON.parse(json);
    
    
    if(!pets) return;

    let html= `
    <table class="table table-striped table-dark table-bordered">
        <thead>
            <tr>
                <th> Species </th>
                <th> Name </th>
                <th> Age </th>
                <th> Picture </th>
            </tr>
        </thead>
        <tbody>
    `;
    for(const item of pets){
        html+=`
        <tr>
            <td>${item.petSpecies}</td>
            <td>${item.petName}</td>
            <td>${item.petAge}</td>
            <td><img src="${item.petPicture}"></td>
        </tr>
        `;
    }
    html +=`</tbody> </table>`;
    tableDiv.innerHTML = html;
}