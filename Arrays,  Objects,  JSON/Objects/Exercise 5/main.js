const worker ={
    firstName : "Oran",
    lastName : "Shakarov",
    salary: "30,000",
    email : "OranShakarov@gmail.com",
    phone : "0503030353",
   
    creditCard : {
    type : "Visa",
    creditCardNumber : "4580-4050-6070-8090",
    expires: "08/26",
    securityNumber : "358",
}};

document.write(`First name: ${worker.firstName}<br>`);
document.write(`Last name: ${worker.lastName}<br>`);
document.write(`Salary: ${worker.salary}<br>`);
document.write(`Email: ${worker.email}<br>`);
document.write(`Phone: ${worker.phone}`);

document.write(`Type: ${worker.creditCard.type}<br>`);
document.write(`Credit card number: ${worker.creditCard.creditCardNumber}<br>`);
document.write(`Expires: ${worker.creditCard.expires}<br>`);
document.write(`Security number: ${worker.creditCard.securityNumber}<br>`);
document.write("<hr>");


for(const prop in worker){
    if(prop !== 'creditCard')
    document.write(`${prop} ➡️ ${worker[prop]} <br>`);
 }


 for(const prop in worker.creditCard){
    document.write(`${prop} ➡️ ${worker.creditCard[prop]} <br>`);
 }
