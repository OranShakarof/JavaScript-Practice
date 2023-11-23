const cloths =[
    cloth1 ={
        type: "Zara",
        size: "L",
        price: 15.99,
        color: "Black",
    },
    cloth2 ={
        type: "Gucci",
        size: "M",
        price: 99.99,
        color: "White",
    },
    cloth3 ={
        type: "Prada",
        size: "S",
        price: 89.99,
        color: "Brown",
    },
    cloth4 ={
        type: "Boss",
        size: "L",
        price: 65.99,
        color: "White",
    },
    cloth5 ={
        type: "Nike",
        size: "XXL",
        price: 45.99,
        color: "Black",
    },
];

for(const item of cloths){
    for(const prop in item){
        document.write(`${prop}: ${item[prop]} <br>`);
    }
    document.write("<hr>");
}