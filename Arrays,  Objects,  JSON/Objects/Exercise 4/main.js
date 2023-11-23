const creditCard ={
    type : "Visa",
    creditCardNumber : "4580-4050-6070-8090",
    expires: "08/26",
    securityNumber : "358",
};
document.write(`Type: ${creditCard.type}<br>`);
document.write(`Credit card number: ${creditCard.creditCardNumber}<br>`);
document.write(`Expires: ${creditCard.expires}<br>`);
document.write(`Security number: ${creditCard.securityNumber}<br>`);
document.write("<hr>");

for(const prop in creditCard){
    document.write(`${prop}: ${creditCard[prop]} <br>`);
}
