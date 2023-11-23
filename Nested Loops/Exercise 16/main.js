const n = +prompt("Enter a number: ");
let spaces = n;
for(let i = 1; i <= n; i++){
    document.write("&nbsp;&nbsp;&nbsp;".repeat(spaces));
    for(let j = 1; j<= i; j++){
        document.write(j + " ");
    }
    for(let h = i-1; h >= 1; h--){
        document.write(h + " ");
    }
    spaces-=1;
    document.write("<br>");
}