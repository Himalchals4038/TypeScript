type Book = {
    name: string;
    price: number;
    pages: number;
    isPublished: boolean;
}
let bookString = `{
    "name": "Learn TypeScript",
    "price": 39.99,
    "pages": 300,
    "isPublished": true
}`;
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement;
console.log(inputElement);