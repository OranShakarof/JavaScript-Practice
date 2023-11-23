

function printSmiley(n){
    switch(n){
        case 1:
            document.write("😁");
            break;
        case 2:
            document.write("🙁");
            break;
        case 3:
            document.write("🫤");
            break;
        case 4:
            document.write("😉");
            break;
        case 5:
            document.write("😞");
            break;
    }
}

printSmiley(4);
document.write("<hr>");
const n = +prompt("Enter num to print smiley: ");
printSmiley(n);
document.write("<hr>");
printSmiley(Math.floor(Math.random()*5) +1);
document.write("<hr>");

function printAllSmileys(){
    for(let i = 1; i <=5; i++){
        printSmiley(i);
    }
}
printAllSmileys();
document.write("<hr>");

function printRandomSmileys(){
    for(let i = 1; i <= 100; i++){
        const n = Math.floor(Math.random()*5) +1;
        printSmiley(n);
    }
}
printRandomSmileys();