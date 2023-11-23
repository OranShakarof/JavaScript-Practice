const num = +prompt("Enter Number");
const first = +prompt("Enter Number");
const last = +prompt("Enter Number");

for(i = first; i <= last; i = i + 1){
    if(i % num === 0){
        document.write(i + " ");
    }
}