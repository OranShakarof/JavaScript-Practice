const matrix = [[12,23,34,45], [56,67,78,89], [10,20,30,40]];
let sum = 0;
let count = 0;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j< matrix[i].length; j++){
        document.write(matrix[i][j]+ " ");
        sum+=matrix[i][j];
        count++;
    }
}
document.write("<hr>");
const avg = sum / count;
document.write("The Sum of the matrix is: " + sum + "<br>");
document.write("The Average of the matrix is: " + avg + "<br>");
document.write("<hr>");

let min = +Infinity;
let max = -Infinity;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j< matrix[i].length; j++){
        if(max < matrix[i][j]){
            max = matrix[i][j];
        }
        if(min > matrix[i][j]){
            min = matrix[i][j];
        }
    }
}
document.write("The Max number in the matrix is: " + max + "<br>");
document.write("The Min number in the matrix is: " + min + "<br>");
document.write("<hr>");

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j< matrix[i].length; j++){
        if(matrix[i][j] % 7 === 0){
        document.write(matrix[i][j]+ " ");
        }
        else{
            document.write("😁 ");
        }

    }
}