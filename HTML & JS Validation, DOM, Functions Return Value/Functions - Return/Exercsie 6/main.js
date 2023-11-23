

function getIndexOfMinimumNumber(arr){
    let index = 0;
    let min = +Infinity
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            index = i;
        } 
    }
return index;
}

const min1= getIndexOfMinimumNumber([1100,20,30,40,50,60]);
document.write("The first index of min number is: " + min1 +"<br>");

const min2= getIndexOfMinimumNumber([100,200,400,500,700,600,15]);
document.write("The second index of min number is: " + min2 +"<br>");

const min3= getIndexOfMinimumNumber([100,200,3000,5000,+6999]);
document.write("The third index of min number is: " + min3 +"<br>");

    