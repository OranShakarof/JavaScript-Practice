const names = [];

for(let i = 1; i<=5; i++){
     const name = prompt("Enter name: ");
     names.push(name);
}

document.write("The first names is : " + names[0]+ "<br>");
document.write("The last names is : " + names[names.length-1]+ "<br>");
document.write("<hr>");

for(const item of names){
    document.write(item + "<br>");
}
document.write("<hr>");

for(let i = names.length-1; i>=0; i--){
    document.write(names[i] + " ");
}