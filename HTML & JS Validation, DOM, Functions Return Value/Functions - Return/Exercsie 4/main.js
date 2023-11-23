
function getArrayMaxString (strings){
    let max = "";
    for(const item of strings){
        if(max.length < item.length){ 
        max = item;
        }
    }
    return max;
}

const max1= getArrayMaxString(["Oran","Eliran","Eden"]);
document.write("The first Max String length is: " + max1 +"<br>");

const max2= getArrayMaxString(["Alon","Maayan","Aviva","Yossi"]);
document.write("The second Max String length is: " + max2 +"<br>");

const max3= getArrayMaxString(["Eli","Omer","Roi","Rick","Morty"]);
document.write("The third Max String length is: " + max3 +"<br>");
