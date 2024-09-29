import { Library } from "./Library";
import { Genre } from "./Book";

const myLib = new Library();

// Adding books
myLib.addBook({
  title: "Book1",
  author: "A",
  genre: Genre.Fiction,
  publishedYear: 2020,
  available: true,
});
myLib.addBook({
  title: "Book2",
  author: "B",
  genre: Genre.NonFiction,
  publishedYear: 2019,
  available: false,
});

// Save to file
myLib.save("books.json");

// Create a new library instance and load from file
const newLibrary = new Library();
newLibrary.load("books.json");

// List books to confirm loading
newLibrary.allBook();
