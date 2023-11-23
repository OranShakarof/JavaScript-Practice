

function isPrimaryNum(num){
     if(num === 1) return false;
     if(num === 2 || num === 3 || num === 5 || num === 7){
        return true;
     }
     for(let i = 2; i<=9; i++){
        if(num % i === 0){
            return false;
        }
        
     }
     return true;
}

function isPrimaryArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(!isPrimaryNum(arr[i])){
            return false;
        }
    }
    return true;
}

const primary = isPrimaryArray([2,11,13,17]);
if(primary){
    document.write("The array is of primary numbers" + "<br>");
}
else{
    document.write("The array isn't of primary numbers" + "<br>");
}

const primary2 = isPrimaryArray([2,16,18,17]);
if(primary2){
    document.write("The array is of primary numbers" + "<br>");
}
else{
    document.write("The array isn't of primary numbers" + "<br>");
}