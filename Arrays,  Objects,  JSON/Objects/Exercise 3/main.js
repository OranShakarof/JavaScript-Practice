const clothes ={
    manufacture : "Gucci",
    size : "L",
    color: "Red",
    price : 500.99,
};
document.write(`Manufacture : ${clothes.manufacture}<br>`);
document.write(`Size: ${clothes.size}<br>`);
document.write(`Color: ${clothes.color}<br>`);
document.write(`Price: ${clothes.price}<br>`);
document.write("<hr>");

for(const prop in clothes){
    document.write(`${prop} ➡️ ${clothes[prop]} <br>`);
}
document.write("<hr>");
clothes.manufacture = prompt("Enter manufacture: ");
clothes.size = prompt("Enter size: ");
clothes.color = prompt("Enter color: ");
clothes.price = +prompt("Enter price: ");

document.write(`Manufacture : ${clothes.manufacture}<br>`);
document.write(`Size: ${clothes.size}<br>`);
document.write(`Color: ${clothes.color}<br>`);
document.write(`Price: ${clothes.price}<br>`);
document.write("<hr>");

for(const prop in clothes){
    document.write(`${prop} ➡️ ${clothes[prop]} <br>`);
}
