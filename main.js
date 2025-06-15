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
	} else if (editFlag === true) {
		entryTitle.innerHTML = bookTitle;
		editFlag = false;
		inputTitle.value = "";
		btnSave.innerHTML = `<i class="fa-regular fa-floppy-disk"></i>`;
		alert.innerHTML = "Book Edited";
		alert.classList.add("alert-success");

		setTimeout(() => {
			alert.innerHTML = "";
			alert.classList.remove("alert-success");
		}, 5000); // first time using the timeout function
	}

	function deleteBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		console.log(entryTitle);
		entryContainer.removeChild(element);
	}

	function editBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		entryTitle = e.currentTarget.parentElement.previousElementSibling; // target the div that holds the title
		inputTitle.value = entryTitle.innerHTML; // then replace the inputvalue with the inner html of the targeted div
		btnSave.innerHTML = `<i class="fa-regular fa-pen-to-square">`; // chnage the save btn back to edit
		entryTitleID = element.dataset.id;
		editFlag = true;
	}
}
