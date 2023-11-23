

function makeMultiplicationMatrix(){
    const matrix = [];
    for(let i = 1; i <=10; i++){
        const arr =[];
        for(let j = 1; j <= 10; j++){
            arr.push(i*j);
        }
        matrix.push(arr);
    }
    return matrix;
}

const matrix = makeMultiplicationMatrix();
console.log(matrix);

function isLegalMultiplicationMatrix(matrix){
    if(matrix.length < 10) return false;
    let checkMat1 = 1; 
    let checkMat2 = 1;

    for(let i = 0; i < matrix.length; i++){
        if(matrix[i].length < 10) return false;

        for(let j = 0; j < matrix[i].length; j++){

            if(matrix[i][j] !== checkMat1 * checkMat2){
                return false;
            }
            checkMat1++;
        }
        checkMat1 = 1;
        checkMat2++;  
    }
    return true;
}

if(isLegalMultiplicationMatrix(matrix)){
    document.write("The Matrix is: legal" + "<br>");
}
else{
    document.write("The Matrix is: illegal" + "<br>");
}

const mat = [[1,2,3,4,5,6,7], [10,8,9,10,89,108,0]];

if(isLegalMultiplicationMatrix(mat)){
    document.write("The Matrix is: legal" + "<br>");
}
else{
    document.write("The Matrix is: illegal" + "<br>");
}