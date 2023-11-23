const cars = [];
const car1 = {
    model: "Ferrari",
    creationDate: "2023",
    color: "Red",
};
const car2 = {
    model: "Mercedes",
    creationDate: "2022",
    color: "White",
};
const car3 = {
    model: "Porsche",
    creationDate: "2021",
    color: "Black",
};
cars.push(car1);
cars.push(car2);
cars.push(car3);

for(let i = 0; i < cars.length; i++){
    document.write(`Model: ${cars[i].model} <br>`);
    document.write(`Creation Date: ${cars[i].creationDate} <br>`);
    document.write(`Color: ${cars[i].color} <br>`);
    document.write("<hr>");
}
document.write("<br>")
for(const item of cars){
    for(const prop in item){
        document.write(`${prop}: ${item[prop]} <br>`);
    }
    document.write("<hr>");
}













