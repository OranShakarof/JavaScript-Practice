const rectangle ={
    height : 5,
    width : 8,
    color: "Blue",
    x : 10,
    y : 20
};
document.write(`Height: ${rectangle.height}<br>`);
document.write(`Width: ${rectangle.width}<br>`);
document.write(`Color: ${rectangle.color}<br>`);
document.write(`X : ${rectangle.x}, Y: ${rectangle.y} <br>`);
document.write("<hr>");

for(const prop in rectangle){
    document.write(`${prop} ➡️ ${rectangle[prop]} <br>`);
}

