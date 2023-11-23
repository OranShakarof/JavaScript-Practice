function printLine (num){
    for(let i = 1; i <= num; i++){
        document.write("* ");
    }
    document.write("<br>");
    
}

function printRectangle(num) {
    for(let i = 1; i <=num; i++){
        printLine(num);
    }
}

const number = +prompt("Enter a number: ");
printRectangle(number);