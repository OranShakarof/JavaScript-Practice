
function getArrayMinimum (arr){
    let min = +Infinity;
    for(const item of arr){
        if(min > item) min = item;
    }
    return min;
}

const min1= getArrayMinimum([10,20,30]);
document.write("The first minium number is: " + min1 +"<br>");

const min2= getArrayMinimum([100,200,300,5666]);
document.write("The second minium number is: " + min2 +"<br>");

const min3= getArrayMinimum([1000,2000,3000,5000,+6999]);
document.write("The third minium number: " + min3 +"<br>");
