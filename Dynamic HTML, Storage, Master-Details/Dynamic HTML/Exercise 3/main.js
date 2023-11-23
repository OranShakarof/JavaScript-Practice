
function addColor(){
  //Take HTML Elements
  const colorBox = document.getElementById("colorBox");

  // Take Values
  const color = colorBox.value;

  //Take HTML Elements
  const colorTable = document.getElementById("colorTable");
  const countColorPara = document.getElementById("countColorPara");

  //Validation Color:
  if(colorBox.value.length < 3 || colorBox.value.length > 20){
    alert("Color doesn't exist");
    return;
  }
  
  //Create Dynamic HTML
  let html = `<tr> 
  <td>${color}</td>
  <td style="background-color: ${color}"></td>
  </tr>`;
  //Display the student data on the HTML
  colorTable.innerHTML += html;

  //Calc The Amount of Colors
  const rows = colorTable.getElementsByTagName("tr");
  let count = 0;
  for(let i = 0; i< rows.length; i++){
    count++;
  }

  //Display the amount of colors:
  countColorPara.innerHTML = "The Count of colors in the table is: " + count;
  //Clear Boxes
  colorBox.value= "";
  colorBox.focus();

  
}
