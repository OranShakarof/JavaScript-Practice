const height = +prompt("Enter height :");
const width = +prompt("Enter width: ");

for(let i = 1; i<=height; i++){

    for(let j = 1; j<= width; j++){
        document.write("* ");
    }
    document.write("<br>");
}