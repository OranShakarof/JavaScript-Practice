const myCat = {
    name : "herztel",
    age : 8,
    color : "black",
    sterile : false, 
};

const stringMyCat = JSON.stringify(myCat);
alert(stringMyCat);

const yourCat = JSON.parse(stringMyCat);
// for(const prop in yourCat){
//     document.write(`${prop}: ${yourCat[prop]} <br> `);
// }
document.write("Name: " + myCat.name +"<br>");
document.write("Age: " + myCat.age+"<br>");
document.write("Color: " + myCat.color+"<br>");
if(myCat.sterile){
    document.write("Is sterile: yes");
}
else{
    document.write("Is sterile: No");
}