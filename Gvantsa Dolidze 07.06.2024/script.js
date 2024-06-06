// example 1
const redBox = document.querySelector("#red-box");

redBox.addEventListener("mouseover", () => {
    redBox.style.height = "500px";
    redBox.style.backgroundColor = "blue";
    redBox.style.width = "100%";
    redBox.style.transition = "all 05s";
    redBox.style.cursor = "pointer"
});

redBox.addEventListener("mouseout", (event) => {
    event.target.style.height = "100px";
    event.target.style.backgroundColor = "red";
    event.target.style.width = "100px";
    event.target.style.transition = "all 10s";
    
    
    // კლასის დამატებით ვერ ვაკეთებ ??? 
    // redBox.classList.add("red-box");
});



//example 2
const btn = document.getElementById("btn");
const text = document.querySelector("#text");
btn.addEventListener("click", () => text.classList.toggle("text-show"));

