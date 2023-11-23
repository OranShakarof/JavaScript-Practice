
 function printArray(arr){
    for(const item of arr){
        document.write(item+ " ");
    }
 }

 printArray([10,20,30,40]);
 document.write("<hr>");

 const randomArr = [];
 const length = Math.floor(Math.random()* 20)+1;
 for(let i = 1; i <= length ; i++){
    randomArr.push(Math.floor(Math.random()* 100)+1)
 }

 printArray(randomArr);