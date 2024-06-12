document.addEventListener('DOMContentLoaded', function () {

    const navMenu = [
        "About Us",
        "contact",
        "Sign Up",
        "Sign In"
    ];
    const navBar = document.getElementById("nav");
    const addText = document.getElementById("add-text");
    const addBtn = document.getElementById("add-btn");
    const toDoList = document.getElementById("list");
    const toDoArr = [
        "Drink glass of water",
        "Exercise",
        "Code"
    ];
    // function for navbar
    function addNavMenu() {
        navMenu.forEach(function (menu) {
            const li = document.createElement('li');
            li.textContent = menu;
            navBar.appendChild(li);
        });

    };
    addNavMenu();

    //function for to do list
    function createToDoList() {
        toDoList.innerHTML = "";
        toDoArr.forEach(function (list, index) {
            const li = document.createElement('li');
            li.textContent = list;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener("click", () => {
                toDoArr.splice(index, 1);
                createToDoList();
            });
            li.appendChild(removeBtn);
            toDoList.appendChild(li);
        });
    };
    //add list item with button function
    addBtn.addEventListener("click", () => {
        const newText = addText.value.trim();
        if (newText) {
            toDoArr.push(newText);
            addText.value = "";
            createToDoList();
        }
    })
    createToDoList();

});