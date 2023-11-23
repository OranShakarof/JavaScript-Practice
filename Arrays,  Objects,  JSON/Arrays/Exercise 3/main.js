const grades = []; 

for(let i = 1; i <=10; i++){
    const grade = +prompt("Enter a grade:");
    grades.push(grade);
}

let legal = true;
for(let i = 0 ; i< grades.length; i++){
    if(grades[i] > 100 || grades[i] < 0 ){
        legal=false;
        break;
    }   
}

if(legal){
    document.write("The Grades are legal");
}

else{
    document.write("The Grades are illegal");
}
document.write("<hr>");

for(const item of grades){
    if(item > 100 || item < 0 ){
        document.write(item + " ");
    }
}