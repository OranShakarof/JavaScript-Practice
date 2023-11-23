
function getArrayAverage (arr){
    let sum =0;
    for(const item of arr){
        sum+= item;
    }
    const avg = sum / arr.length;
    return avg;
}

const avg1= getArrayAverage([10,20,30]);
document.write("The First average is: " + avg1 +"<br>");

const avg2= getArrayAverage([100,200,300,5666]);
document.write("The second average is: " + avg2 +"<br>");

const avg3= getArrayAverage([1000,2000,3000,5000,+6999]);
document.write("The third average is: " + avg3 +"<br>");
