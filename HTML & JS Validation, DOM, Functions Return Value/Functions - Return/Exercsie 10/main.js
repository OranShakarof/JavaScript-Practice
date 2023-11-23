

function isPrimaryNum(num){
     if(num === 1) return false;
     // const limit = Math.floor(num / 2);
     const limit = Math.floor(Math.sqrt(num)); // שורש 
     for(let i = 2; i<= limit; i++){
        if(num % i === 0){
            return false;
        }
        
     }
     return true;
    }
    
 const num = +prompt("Enter num: ");

 if(isPrimaryNum(num)){
    document.write(`The number: ${num} is Primary`);
}
else{
    document.write(`The number: ${num} is Not Primary`);
}
