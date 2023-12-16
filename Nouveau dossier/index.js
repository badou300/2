// Our entire library
const books = require('./library.json');

/**
 * Returns the number of books in stock
 * @param {array} stock - the books in stock
 * @returns {number} - number of books
 */
function nbBooks(stock) {
  return stock.length;
}

/**
 * List efficiently in the console all of the title of the stock
 * @param {array} stock - the books in stock
 */
function listAllTitles(stock) {
  stock.forEach((book) => {
    console.log(book.title);
  });
}

/**
 * Add a book inside the stock
 * @param {array} stock - the books in stock
 * @param {string} title - title of the book
 * @param {string} author - author of the book
 * @param {string} genre - genre of the book
 * @param {number} pages - pages of the book
 * @param {string} language - language of the book
 * @param {number} year - year of the published book
 * @returns {array} - the new stock
 */
function addBook(stock, title, author, genre, pages, language, year) {
  const newBook = {
    author,
    title,
    pages,
    genre,
    language,
    year
  };
  stock.push(newBook);
  return stock;
}

/**
 * Remove a particular book
 * @param {array} stock - stock of books
 * @param {number} index - index of the book to delete
 */
function removeBook(stock, index) {
  stock.splice(index, 1);
}

/**
 * Update the title of a particular book
 * @param {array} stock - stock of books
 * @param {number} index - index of the book to update
 * @param {string} newTitle - new title of the book
 */
function updateTitle(stock, index, newTitle) {
  stock[index].title = newTitle;
}

/**
 * List in the console only the books written in English
 * @param {array} stock - stock of books
 */
function listEnglishBooks(stock) {
  const englishBooks = stock.filter((book) => book.language === 'English');
  listAllTitles(englishBooks);
}

/**
 * List in the console only the books that have more than 300 pages
 * @param {array} stock - stock of books
 */
function listBooksOver300Pages(stock) {
  const booksOver300Pages = stock.filter((book) => book.pages > 300);
  listAllTitles(booksOver300Pages);
}

/**
 * Return all of the books written between 2000 (excluded) and 2010
 * @param {array} stock - stock of books
 * @returns {array} - books between 2000 and 2010
 */
function booksBetween2000And2010(stock) {
  return stock.filter((book) => book.year > 2000 && book.year < 2010);
}

/**
 * Return all of the books with the genre "Fantasy" and in English
 * @param {array} stock - stock of books
 * @returns {array} - Fantasy books in English
 */
function fantasyBooksInEnglish(stock) {
  return stock.filter((book) => book.genre === 'Fantasy' && book.language === 'English');
}

/**
 * Return a book that contains the word "ride" inside its title
 * @param {array} stock - stock of books
 * @returns {object} - book containing "ride" in the title
 */
function bookContainingRide(stock) {
  return stock.find((book) => book.title.toLowerCase().includes('ride'));
}

// Example usage:
const stock = books.slice(); // Copy the original array to avoid modifying it directly

console.log('Number of books:', nbBooks(stock));

console.log('\nList of all titles:');
listAllTitles(stock);

console.log('\nAdd a new book:');
const updatedStock = addBook(stock, 'New Book', 'Author Name', 'Genre', 350, 'English', 2022);
console.log('Updated stock:', updatedStock);

console.log('\nRemove a book at index 1:');
removeBook(updatedStock, 1);
console.log('Updated stock after removal:', updatedStock);

console.log('\nUpdate the title of the book at index 0:');
updateTitle(updatedStock, 0, 'Updated Title');
console.log('Updated stock after title update:', updatedStock);

console.log('\nList of English books:');
listEnglishBooks(updatedStock);

console.log('\nList of books with more than 300 pages:');
listBooksOver300Pages(updatedStock);

console.log('\nBooks published between 2000 and 2010:');
console.log(booksBetween2000And2010(updatedStock));

console.log('\nFantasy books in English:');
console.log(fantasyBooksInEnglish(updatedStock));

console.log('\nBook containing "ride" in the title:');
console.log(bookContainingRide(updatedStock));
