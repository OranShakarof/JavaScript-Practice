
 function printNumFromStartToEnd(start,end){
    const num = Math.floor(Math.random() * (end - start +1) + start);
    document.write(num + " ");
 }

 printNumFromStartToEnd(5,10);
 document.write("<hr>");
 
 const start = +prompt("Enter Start Number:") ;
 const end = +prompt("Enter End Number:") ;
 printNumFromStartToEnd(start,end);
 
 document.write("<hr>");
 
 
 for(let i = 1; i<= 100; i++){
    printNumFromStartToEnd(-10,10);
 }