const alert = document.querySelector(".alert");
const libraryForm = document.querySelector(".library-form");
const inputTitle = document.getElementById("title");
const entryContainer = document.querySelector(".entry-container");
const btnSave = document.getElementById("btn-save");
const btnClearAll = document.querySelector(".clear-all");
const main = document.getElementsByTagName("main");

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

document.main.style.backgroundColor = `rgb(200,200,200)`;

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
		entryItem.setAttribute("data-id", id);

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

		const btnDone = entryItem.querySelector(".btn-done");
		btnDone.addEventListener("click", completedBook);

		inputTitle.value = "";
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
		}, 2000);
	}

	function deleteBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		entryContainer.removeChild(element);
	}

	function editBook(e) {
		const element = e.currentTarget.parentElement.parentElement;
		entryTitle = e.currentTarget.parentElement.previousElementSibling;
		inputTitle.value = entryTitle.innerHTML;
		btnSave.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
		entryTitleID = element.dataset.id;
		editFlag = true;
	}

	function completedBook(e) {
		const element = e.currentTarget.parentElement.previousElementSibling;
		element.classList.add("btn-done-marked");
		alert.innerHTML = "Book Completed";
		alert.classList.add("alert-success");
		setTimeout(() => {
			alert.innerHTML = "";
			alert.classList.remove("alert-success");
		}, 2000);
	}
}
