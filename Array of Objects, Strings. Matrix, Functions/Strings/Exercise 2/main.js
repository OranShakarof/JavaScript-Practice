const file = prompt("Enter a file: ");
const fileEnding = file.substring(file.indexOf("."));

switch(fileEnding){
    case ".jpg":
        document.write("Its picture file Ending in: .jpg");
        break;
    case ".jpeg":
        document.write("Its picture file Ending in: .jpeg");
        break;
    case ".png":                
        document.write("Its picture file Ending in: .png");
        break;
    case ".gif":
        document.write("Its picture file Ending in: .gif");
        break;
    case ".tiff":
        document.write("Its picture file Ending in: .tiff");
        break;
    case ".bmp":
       document.write("Its picture file Ending in: .bmp");            
        break;
    case ".webp":
        document.write("Its picture file Ending in: .webp");
        break;
    default:
        document.write("Your file isn't picture");
}
