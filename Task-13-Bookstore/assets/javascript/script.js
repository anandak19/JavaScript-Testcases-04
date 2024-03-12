let searchResult = false;

//function for adding new book
function addBook() {
    let newTitle = prompt('Enter the title of Book :')
    let newAuther= prompt("Enter auther name :")
    let newPrice = prompt('Enter price of the Book')

    var bookList = document.getElementById('bookList')

    var bookSlate = document.createElement("div");
    bookSlate.className = "book-slate";

    var leftDiv = document.createElement("div");
    leftDiv.className = "book-slate__left";

    var titleHeading = document.createElement("h2");
    titleHeading.className = 'book-slate__title';
    titleHeading.textContent = newTitle;

    var rightDiv = document.createElement("div");
    rightDiv.className = "book-slate__right";

    var authorName = document.createElement("p");
    authorName.className = "book-slate__author";
    authorName.textContent = newAuther;

    var priceOf = document.createElement("p");
    priceOf.className = "book-slate__price";
    priceOf.textContent = "₹" + newPrice;

    leftDiv.appendChild(titleHeading);
    rightDiv.appendChild(authorName);
    rightDiv.appendChild(priceOf);

    bookSlate.appendChild(leftDiv);
    bookSlate.appendChild(rightDiv);
    bookList.appendChild(bookSlate);
    console.log("book added");   
}




// function for searching a book 
function searchBook() {
    let titleInput = document.getElementById('searchItem')
    let title = titleInput.value;

    let bookSlates = document.getElementsByClassName("book-slate");

    for (let i = 0; i < bookSlates.length; i++) {
        bookSlates[i].classList.remove('book-slate--active');
        var bookTitleElement = bookSlates[i].querySelector('.book-slate__title');

        if (bookTitleElement.textContent === title) {
            bookTitleElement.className
            bookSlates[i].classList.add('book-slate--active');
            searchResult = true;

            bookSlates[i].scrollIntoView({ behavior: 'smooth' });
        }
    }
    if (!searchResult) {
        alert("Book not found");
    }
}
