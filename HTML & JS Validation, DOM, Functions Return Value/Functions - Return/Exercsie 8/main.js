

function getAverageOfMatrix(matrix){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
               sum += matrix[i][j];
               count++;
        }
    }
    const avg = sum / count;
return avg ;
}

const avg = getAverageOfMatrix([[10,20,30],[40,50,60],[70,80,90]]);

document.write("The Average of the matrix is: " + avg);



