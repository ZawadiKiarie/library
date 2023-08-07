let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  //  this.info = function() {
  //   return `${title} by ${author}, ${pages} pages, ${read}`;
  //  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');


function addBookToLibrary() {
  let title = "Daisy Jones"
  let author = "Tailor Jenkins";
  let pages = 350;
  let read = "read";
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

const container = document.querySelector('.cards-ctn');

function displayBook() {
  addBookToLibrary();
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  container.appendChild(bookCard);

  let bookTitle = document.createElement('div');
  bookTitle.textContent = myLibrary[0].title;

  let bookAuthor = document.createElement('div');
  bookAuthor.textContent = myLibrary[0].author;

   let bookPages = document.createElement('div');
   bookPages.textContent = myLibrary[0].pages;

   let bookStatus = document.createElement('button');
   bookStatus.textContent = myLibrary[0].read;

   let bookRemoveBtn = document.createElement('button');
   bookRemoveBtn.textContent = "Remove";
   bookCard.appendChild(bookTitle);
   bookCard.appendChild(bookAuthor);
   bookCard.appendChild(bookPages);
   bookCard.appendChild(bookStatus);
   bookCard.appendChild(bookRemoveBtn);
}

const addBookBtn = document.querySelector('.new-book');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if(event.target === modal) {
    toggleModal();
  }
}

addBookBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
