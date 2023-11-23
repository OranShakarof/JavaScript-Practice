const geoLocation = [];

for(let i = 1; i <= 3; i++){
    const gL = { latitude : 0,  longitude: 0,};
    gL.latitude = +prompt("Enter a latitude: ");
    gL.longitude = +prompt("Enter a longitude: ");
    geoLocation.push(gL);
}

for(const item of geoLocation){
    for(const prop in item){
        document.write(`${prop}: ${item[prop]} <br>`);
    }
    document.write("<hr>");
}