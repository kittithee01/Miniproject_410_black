class Library {
  constructor() {
    this.books = [];
    this.currentId = 1;
  }

  addBook(book) {
    book.id = this.currentId++;
    this.books.push(book);
  }

  update(id, updates) {
    const book = this.books.find((b) => b.id === id);
    if (book) {
      Object.assign(book, updates);
    }
  }

  deleteByTitle(title) {
    this.books = this.books.filter((b) => b.title !== title);
  }

  search(term) {
    return this.books.filter((b) => b.title.includes(term));
  }

  getAllBooks() {
    return this.books;
  }
}

window.Library = Library;
