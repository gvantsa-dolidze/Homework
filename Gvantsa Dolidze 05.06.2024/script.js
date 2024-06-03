const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const mobileNumber = document.getElementById("mobile").value;



function handleFocus(event) {
    event.target.classList.add("highlight");
}

function handleBlur(event) {
    event.target.classList.remove("highlight");
}

function handleInputChange(event) {
 console.log(`${event.target.name}: ${event.target.value}`)
}



function submitForm(event) {
    event.preventDefault();
    alert("მომხმარებელი დარეგისტრირებულია");
}