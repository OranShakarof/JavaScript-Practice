const multiplicationBoard = [];
for(let i = 1; i <=10; i++){
    const arr = [];
    for(let j = 1; j<= 10; j++){
        const n = j*i;
        arr.push(n);
    }
    multiplicationBoard.push(arr);
 }
 let sum = 0;
for(let i = 0; i < multiplicationBoard.length; i++){
    for(let j = 0; j <multiplicationBoard[i].length; j++){
       
        document.write(multiplicationBoard[i][j]+ " ");
        sum+= multiplicationBoard[i][j];
    }
    document.write("<br>");
}
document.write("<hr>");
document.write("The Sum of the matrix is: " + sum);

