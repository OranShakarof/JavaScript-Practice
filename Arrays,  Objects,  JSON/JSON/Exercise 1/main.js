const books = [ 
    book1 ={
    bookCode : "121212",
    name : "HarryPother",
    author : "J.K.Rowling.",
    price : 59.99,
},

    book2 = {
    bookCode : "147369",
    name : "TheA lchemist",
    author : "Paulo Coelho",
    price : 49.99,

},
    book3 = {
    bookCode : "123456",
    name : "American Dirt",
    author : "Jeanine Cummins",
    price : 79.99,
    },   
];

const stringBooks = JSON.stringify(books);
alert(stringBooks);

const items = JSON.parse(stringBooks);
console.log(books);
console.log(items);
for(let i = 0; i < items.length; i++){
    document.write(`Book ID: ${items[i].bookCode} <br>`);
    document.write(`Book Name: ${items[i].name} <br>`);
    document.write(`Book Author: ${items[i].author} <br>`);
    document.write(`Book Price: ${items[i].price} <br>`);
    document.write(`<hr>`);
}