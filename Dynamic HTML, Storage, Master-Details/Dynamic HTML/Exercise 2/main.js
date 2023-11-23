
function addToTable(){
  //Take HTML Elements
  const firstNameBox = document.getElementById("firstNameBox");
  const lastNameBox = document.getElementById("lastNameBox");
  const gradeBox = document.getElementById("gradeBox");

  // Take Values
  const firstName = firstNameBox.value;
  const lastName = lastNameBox.value;
  const grade = +gradeBox.value;

  //Validation First Name:
  if(firstNameBox.value === ""){
    alert("Missing First Name");
    return;
  }
  //Validation Last Name:
  if(lastNameBox.value === ""){
    alert("Missing last Name");
    return;
  }
  //Validation Grade:
  if(gradeBox.value === ""){
    alert("Missing Grade");
    return;
  }
  if(gradeBox.value < 0 || gradeBox.value > 100){
    alert("Illegal Grade");
    return;
  }
  
  
  //Take HTML Elements
  const gradeTable = document.getElementById("gradeTable");
  const averageGradeP = document.getElementById("averageGradeP");

  //Create Dynamic HTML
  let html = ``;
  html+=`
    <tr> 
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${grade}</td>
    </tr>
  `;
  //Display the student data on the HTML
  gradeTable.innerHTML += html;

  // Calculate Average Grade
    const rows = gradeTable.getElementsByTagName("tr");
    let totalGrade = 0;
    for (let i = 0; i < rows.length; i++) {
      const gradeCell = rows[i].getElementsByTagName("td")[2];
      totalGrade += parseInt(gradeCell.innerText);
    }
    const averageGrade = totalGrade / rows.length;
  
    // Update Average Grade in the Paragraph
    averageGradeP.innerText = "Average Grade: " + averageGrade.toFixed(2);

  //Clear Boxes
  firstNameBox.value = "";
  lastNameBox.value ="";
  gradeBox.value="";
  firstNameBox.focus();

  
}
