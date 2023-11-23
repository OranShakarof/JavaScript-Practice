
function getAboveAverageNumbers (arr){
    let sum =0;
    for(const item of arr){
        sum+= item;
    }
    const avg = sum / arr.length;
    let count = 0;
    for(const item of arr){
        if(item >= avg) count++;
    }
    return count;
}

const count1= getAboveAverageNumbers([10,20,30,40,50,60]);
document.write("The First count above average is: " + count1 +"<br>");

const count2= getAboveAverageNumbers([100,200,400,500,700,600,15]);
document.write("The second count above average is: " + count2 +"<br>");

const count3= getAboveAverageNumbers([100,200,3000,5000,+6999]);
document.write("The third count above average is: " + count3 +"<br>");

    