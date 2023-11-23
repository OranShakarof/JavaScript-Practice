let num = 1;
while (num > 0) {
  num = +prompt("Enter a number :");
  for (let i = 2; i < num; i+=2) {
    document.write(i + " ");
  }
  if(num <= 0){
    continue;
  }
  document.write(" " + num);
  document.write("<br>")
  
}
