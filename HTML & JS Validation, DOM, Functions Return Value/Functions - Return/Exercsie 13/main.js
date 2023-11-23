

function getRandomNum(){
    const num = Math.floor(Math.random() * 100) + 1;
    return num;
}

function makeArrayBySize(size){
    const arr = [];
    for(let i = 1; i <=size ; i++){
        arr.push(getRandomNum());
    }
    return arr;
}

const arr = makeArrayBySize(10);
document.write(arr);
document.write("<hr>");

const size = +prompt("Enter size of array: ");
const arr1 = makeArrayBySize(size);
document.write(arr1);
document.write("<hr>");

const randomSize = Math.floor(Math.random() * 70) +1;
const arr2 = makeArrayBySize(randomSize);
document.write(arr2);


