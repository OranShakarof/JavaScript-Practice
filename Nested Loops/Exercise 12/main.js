const num = +prompt("Enter a number: ");

for(let i = 1; i <= num; i+=2){

    for(let j = 1; j<= i; j++){
        document.write(j+ " ");
    }
    document.write("<br>");
}
for(let i = num-2 ; i>=1; i-=2){
    
    for(let j = 1; j <= i; j++){
        document.write(j + " ");
    }
    document.write("<br>");
}5