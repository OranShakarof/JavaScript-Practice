function addToList(){
    // Take HTML Elements
    const ingredientBox = document.getElementById("ingredientBox");
    const amountBox = document.getElementById("amountBox");
    const divList = document.getElementById("divList");

    //Take values
    const ingredient = ingredientBox.value;
    const amount = amountBox.value;

    //Validation ingredient:
    if(ingredientBox.value === ""){
        alert("Missing ingredient");
        return
    }
    //Validation amount
    if(amountBox.value === ""){
        alert("Missing amount");
        return;
    }
    if(amountBox.value <= 0){
        alert("Amount must be positive");
        return;
    }

    //Create dynamic HTML
    let html ="";
  
    html+= ` <li> Ingredient: ${ingredient} , Amount: ${amount}</li>`;
    divList.innerHTML += html;

    //Clear Boxes
    ingredientBox ="";
    amountBox.value ="";
}