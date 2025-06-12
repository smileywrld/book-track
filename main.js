// Declaration Section
const alert = document.querySelector(".alert");
const libraryForm = document.querySelector(".library-form");
const inputTitle = document.getElementById("title");
const entryContainer = document.querySelector(".entry-container");
const btnSave = document.getElementById("btn-save");
const btnClearAll = document.querySelector(".clear-all");

let entryTitle;
let editFlag = false;
let entryTitleID = "";

//  Registering events on elements
libraryForm.addEventListener("submit", addEntry);

// Function declaration
function addEntry(e) {
	e.preventDefault();

	const bookTitle = inputTitle.value;

	const id = Math.round(Math.random() * 1000000);

	if (bookTitle && !editFlag) {
		const entryItem = document.createElement("div");
		entryItem.classList.add("entry-item");
		const attr = document.createAttribute("data-id");
		attr.value = id;

		entryItem.setAttributeNode(attr);

		entryItem.innerHTML = `<div class="title">${bookTitle}</div>
		<div class="class-action-btns-container">
			<a href="" class=" btn btn-done"><i class="fa-regular fa-square-check"></i></a>

			<a href="" class=" btn btn-edit"><i class="fa-regular fa-pen-to-square"></i></a>

			<a href="" class=" btn btn-delete"><i class="fa-solid fa-trash-can"></i></a>
		</div>`;

		entryContainer.appendChild(entryItem);
		entryContainer.classList.add("show-entry-container");

		const btnDelete = entryItem.querySelector(".btn-delete");

		btnDelete.addEventListener("click", deleteBook);

		const editBook = entryItem.querySelector(".btn-edit");
		editBook.addEventListener("click", bookEdit);
	}

	function deleteBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		entryContainer.removeChild(element);
		console.log(element);
	}

	function bookEdit(e) {
		
	}
}
