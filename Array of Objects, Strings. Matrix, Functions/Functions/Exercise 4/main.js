

function printMessage(msg,num){
    for(let i=1; i <= num ; i++){
        document.write(msg+ " ");
    }
}

printMessage("Oran",5);

const str = prompt("Enter massage: ");
const n = +prompt("Enter How many to print massage: ");

printMessage(str,n)