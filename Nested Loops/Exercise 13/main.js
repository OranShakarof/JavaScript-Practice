// const height = +prompt("Enter a height: ");
// const width = +prompt("Enter a width: ");
// for(let i = 1; i<= height; i++){
//     for(let j = 1; j <= width; j++){
//         if(i === 1 || i === height || j === 1 || j === width){
//             document.write("* ");
//         }
//         else{
//             document.write("&nbsp;&nbsp;"); //HTML  Entity &nbsp;
//         }
    
//     }
//     document.write("<br>");
// }

const height = +prompt("Enter a height: ");
const width = +prompt("Enter a width: ");
for(let i = 1; i<= height; i++){
    for(let j = 1; j <= width; j++){
        const text = (i === 1 || i === height || j === 1 || j === width) ? "* " : "&nbsp;&nbsp;";
            document.write(text);
    }
    document.write("<br>");
}
