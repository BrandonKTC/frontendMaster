// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

// TODO: define printFavoriteBooks() function

var favoriteBooks = [];

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let book of favoriteBooks) {
		console.log(book);
	}
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Knowl JS");

// TODO: print out favorite books
printFavoriteBooks();
