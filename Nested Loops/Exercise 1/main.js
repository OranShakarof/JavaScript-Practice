let num = 1;
while (num > 0) {
  num = +prompt("Enter a number :");
  for (let i = 1; i <= num; i++) {
    document.write(i + " ");
  }
  document.write("<br>")
}
