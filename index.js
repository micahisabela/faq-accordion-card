function handleClick(event) {
    alert("It works!");
}

let accordionElements = document.querySelectorAll("#tabs");
for (let i = 0; i < accordionElements.length; i++) {
    accordionElements[i].addEventListener("click", handleClick);
}