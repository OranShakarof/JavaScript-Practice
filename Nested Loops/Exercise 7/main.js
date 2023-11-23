const num = +prompt("Enter a number: ");

for(let i = 1; i <= num; i++){

    for(let j = num; j>=i; j--){
        document.write("* ");
    }
    document.write("<br>");
}