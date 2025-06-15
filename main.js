// Initializing variables
const alert = document.querySelector(".alert");
const libraryForm = document.querySelector(".library-form");
const inputTitle = document.getElementById("title");
const entryContainer = document.querySelector(".entry-container");
const btnSave = document.getElementById("btn-save");
const btnClearAll = document.querySelector(".clear-all");

let entryTitle;
let editFlag = false;
let entryTitleID = "";

// Registering Events on elements
libraryForm.addEventListener("submit", addEntry);

function addEntry(e) {
	e.preventDefault();
	const bookTitle = inputTitle.value;
	const id = Math.round(Math.random() * 1000000);

	if (bookTitle && !editFlag) {
		const entryItem = document.createElement("div");
		entryItem.classList.add("entry-item");
		const attributes = document.createAttribute("data-id");
		attributes.value = id;

		entryItem.setAttributeNode(attributes);
		entryItem.innerHTML = `<div class="title">${bookTitle}</div>
		<div class="action-btns-container">
			<a href="#" class="btn btn-done"><i class="fa-regular fa-square-check"></i></a>
			<a href="#" class="btn btn-edit"><i class="fa-regular fa-pen-to-square"></i></a>
			<a href="#" class="btn btn-delete"><i class="fa-solid fa-trash-can"></i></a>
		</div>`;

		const btnDelete = entryItem.querySelector(".btn-delete");
		btnDelete.addEventListener("click", deleteBook);

		entryContainer.appendChild(entryItem);
		entryContainer.classList.add("show-entry-container");

		const btnEdit = entryItem.querySelector(".btn-edit");
		btnEdit.addEventListener("click", editBook);
	}

	function deleteBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		console.log(element);
		entryContainer.removeChild(element);
	}

	function editBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		console.log(element);
		inputTitle.innerHTML = inputTitle.value;
	}
}
