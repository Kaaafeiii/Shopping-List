var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButtons = document.querySelectorAll('.deleteButton');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var addBtn = document.createElement('button');
	addBtn.innerHTML ='delete';
	addBtn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.appendChild(addBtn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var listItems = document.querySelectorAll("li");

listItems.forEach(function (item) {
	item.addEventListener('click', function () {
		item.classList.toggle('done');
	});
});

for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", removeParent);
}

function removeParent(evt){
	evt.target.removeEventListener("click", removeParent);
	evt.target.parentNode.remove();
}