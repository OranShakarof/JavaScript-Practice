

function getRandomNum(min,max){
    const num = Math.floor(Math.random() * (max-min+1)) + min;
    return num;
}

const num1 = getRandomNum(10,20);
const num2 = getRandomNum(20,23);
const num3 = getRandomNum(100,2000);

document.write(`${num1} <br>`);
document.write(`${num2} <br>`);
document.write(`${num3} <br>`);