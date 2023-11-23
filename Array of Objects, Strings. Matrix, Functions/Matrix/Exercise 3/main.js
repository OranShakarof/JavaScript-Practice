const inventory = [];

for(let i = 1; i <= 4; i++){
    const cloth = [];
    for(let j = 1; j <=3 ; j++){
      switch(i){
        case 1: 
        const shirt = prompt("Enter a shirt please: ");
        cloth.push(shirt);
        break;
        case 2:
        const shoes = prompt("Enter a shoes please: ");
        cloth.push(shoes);
        break;
        case 3:
        const coat = prompt("Enter a coat please: ");
        cloth.push(coat);
        break;
        case 4:
        const pants = prompt("Enter a pants please: ");
        cloth.push(pants);
        break;
      }
    }
    inventory.push(cloth);
}

for(let i = 0; i < inventory.length; i++){
    for(let j = 0; j < inventory[i].length; j++){
        document.write(inventory[i][j]+ " ");
    }
    document.write("<br>");
}
document.write("<hr>");

let min = inventory[0][0];
let max = inventory[0][0];
for(let i = 0; i < inventory.length; i++){
    for(let j = 0; j < inventory[i].length; j++){
        if(min.length > inventory[i][j].length){
            min = inventory[i][j];
        }
        if(max.length < inventory[i][j].length){
            max = inventory[i][j];
        }
    }
}
document.write("The Shortest length cloths is: " + min + "<br>");
document.write("The Longest length cloths is: ");

for(const arr of inventory){
    for(const cloth of arr){
        if(max.length === cloth.length){
            document.write(cloth + " ")
        }

    }  
}
