const worker ={
    firstName : "Oran",
    lastName : "Shakarov",
    salary: "30,000",
    email : "OranShakarov@gmail.com",
    phone : "0503030353"
};
document.write(`First name: ${worker.firstName}<br>`);
document.write(`Last name: ${worker.lastName}<br>`);
document.write(`Salary: ${worker.salary}<br>`);
document.write(`Email: ${worker.email}<br>`);
document.write(`Phone: ${worker.phone}`);
document.write("<hr>");

for(const prop in worker){
    document.write(`${prop} ➡️ ${worker[prop]} <br>`);
}

