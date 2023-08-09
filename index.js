
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

const container = document.querySelector('.cards-ctn');

const addBookBtn = document.querySelector('.new-book');
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.getElementById("submit-btn");
const myForm = document.getElementById("myForm");

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
submitBtn.addEventListener("click", toggleModal);

const readCheckbox = document.getElementById("read");
readCheckbox.addEventListener("change", () => {
  if(this.checked) {
    readCheckbox.value = "Read";
  }else {
    readCheckbox.value = "Not read";
  }
});

if (myLibrary.length === 0) {
  const emptyTagHeader = document.createElement('div');
  emptyTagHeader.textContent = "Your Library is currently empty!";
  emptyTagHeader.classList.add("empty-tag-header");

  const emptyTagPara = document.createElement('div');
  emptyTagPara.innerHTML = 'Click the <strong>"+ add book"</strong> button to add a new book';
  emptyTagPara.classList.add("empty-tag-para");

  // Append the message elements to the container
  container.appendChild(emptyTagHeader);
  container.appendChild(emptyTagPara);
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  displayBook();
  myForm.reset();
});

function addBookToLibrary() {
  let readValue = readCheckbox.checked ? "Read" : "Not read";
  let newBook = new Book(title.value, author.value, pages.value, readValue);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

function displayBook() {
  addBookToLibrary();
  container.innerHTML = '';

    for(const data of myLibrary) {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      container.appendChild(bookCard);
  
      let bookTitle = document.createElement('div');
      bookTitle.classList.add("book-title");
      bookTitle.textContent = data.title;
  
      let bookAuthor = document.createElement('div');
      bookAuthor.classList.add("book-author");
      bookAuthor.textContent = `by ${data.author}`;
  
      let bookPages = document.createElement('div');
      bookPages.classList.add("book-pages");
      bookPages.textContent = `${data.pages} pages`;
  
      let bookStatus = document.createElement('button');
      bookStatus.textContent = data.read;
      if(bookStatus.textContent == "Read") {
        bookStatus.classList.add("green-book-status");
      }else {
        bookStatus.classList.add("red-book-status");
      }
  
      bookStatus.addEventListener("click", () => {
        if(bookStatus.textContent == "Read") {
          bookStatus.textContent = "Not read";
          bookStatus.classList.add("red-book-status");
          bookStatus.classList.remove("green-book-status");
        }else if(bookStatus.textContent == "Not read"){
          bookStatus.textContent = "Read";
          bookStatus.classList.add("green-book-status");
          bookStatus.classList.remove("red-book-status");
        }
      })
  
      let bookRemoveBtn = document.createElement('button');
      bookRemoveBtn.classList.add("book-remove-btn");
      bookRemoveBtn.textContent = "Remove";
      bookRemoveBtn.addEventListener("click", () => {
        const index = myLibrary.indexOf(data);
        myLibrary.splice(index, 1);
        container.removeChild(bookCard);
        if (myLibrary.length === 0) {
          const emptyTagHeader = document.createElement('div');
          emptyTagHeader.textContent = "Your Library is currently empty!";
          emptyTagHeader.classList.add("empty-tag-header");
        
          const emptyTagPara = document.createElement('div');
          emptyTagPara.innerHTML = 'Click the <strong>"+ add book"</strong> button to add a new book';
          emptyTagPara.classList.add("empty-tag-para");
        
          // Append the message elements to the container
          container.appendChild(emptyTagHeader);
          container.appendChild(emptyTagPara);
        }
      })
  
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookPages);
      bookCard.appendChild(bookStatus);
      bookCard.appendChild(bookRemoveBtn);
    }
  }




