class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
      }
    }
    deleteBook(isbn) {
        let indexBookToRemove = null;

        for (let i = 0; i < this._books.length; i++) {
            const book = this._books[i];
            if (book.isbn == isbn) {
                indexBookToRemove = i;
                break;
            }
            
        }

        this._books.splice(indexBookToRemove, 1);
    }
  }

// Create library object
const library = new Library("New York Times Best Seller List");

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "123456789");
const bookOfTheDead = new Book("Book of the Dead", "God", "0 A.D.", "987654321")
const standardBook = new Book("Book001", "None", "2021", "192837465")

// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(bookOfTheDead);
library.addBook(standardBook);
console.log(`Book count: ${library.count}`);
library.listBooks();
console.log("-------------")
library.deleteBook(123456789);
library.listBooks();
