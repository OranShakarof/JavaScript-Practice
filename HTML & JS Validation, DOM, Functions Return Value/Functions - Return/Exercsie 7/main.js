

function getMaxInMatrix(matrix){
    let max = -Infinity;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(max < matrix[i][j]){
                max = matrix[i][j];
            }
        }
    }
return max;
}

const max = getMaxInMatrix([[10,20,30],[40,50,60],[70,80,90]]);

document.write("The max in the matrix is: " + max);



