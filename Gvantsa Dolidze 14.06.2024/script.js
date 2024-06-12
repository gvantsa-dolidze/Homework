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
    const list = document.getElementById("list");


    function addNavMenu() {
        //navBar.innerHTML = "";
        navMenu.forEach(function (menu) {
            const li = document.createElement('li');
            li.textContent = menu;
            navBar.appendChild(li);
        });

    };
    addNavMenu();
});