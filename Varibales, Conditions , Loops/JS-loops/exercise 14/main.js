const num = +prompt("Enter Number");
let first = +prompt("Enter Number");
let last = +prompt("Enter Number");
let temp;

if(first>last){
     temp = first;
     first = last; 
     last = temp;
}

for(i = first; i <= last; i = i + 1){
    if(i % num === 0){
        document.write(i + " ");
    }
}


