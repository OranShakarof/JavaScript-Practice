let num = 1;
while (num > 0) {
  num = +prompt("Enter a number :");
  if(num % 2 !== 0){
    num-=1;
  }
  for (let i = num; i >= 2; i-=2) {
    document.write(i + " ");
  }
  document.write("<br>")
  
}
