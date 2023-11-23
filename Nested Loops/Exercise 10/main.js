const num = +prompt("Enter a number: ");

for(let i = 1; i <= num; i++){

    for(let j = 1; j<= i; j++){
        document.write(j+ " ");
    }
    document.write("<br>");
}
for(let i = num ; i>=1; i--){
    
    for(let j = 1; j <= i; j++){
        document.write(j + " ");
    }
    document.write("<br>");
}5