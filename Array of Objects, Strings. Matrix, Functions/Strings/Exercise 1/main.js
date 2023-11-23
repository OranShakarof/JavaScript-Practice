const link = prompt("Enter a link: ");
const linkEnding = link.substring(link.indexOf("."));
document.write("The ending of the link: " + link.substring(link.indexOf("."))+ "<br>");

switch(linkEnding){
    case ".com":
        document.write("International website" + "<br>");
        break;
    case ".org":
        document.write("International website" + "<br>");
        break;
    case ".com.il":
        document.write("Israeli website"+ "<br>");
        break;
    case ".org.il":
        document.write("Israeli website"+ "<br>");
        break;
    default:
    document.write("Other website"+ "<br>");
}

// document.write("The ending of the link: " + link.substring(link.indexOf("."))+ "<br>");
// if(link.includes(".com") || link.includes(".org")){
//     document.write("International website" + "<br>");
// }
// else if(link.includes(".com.il") || link.includes(".org.il")){
//     document.write("Israeli website"+ "<br>");

// }
// else if(link.includes("gov.il")){
//     document.write("Israeli Government website"+ "<br>");
    
// }
// else{
//     document.write("Other website"+ "<br>");
// }
