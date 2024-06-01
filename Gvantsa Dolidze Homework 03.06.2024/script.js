'use strict';

// example 1 
function alertText() {
    setInterval(function alertMsg() {
        alert("Hello From Alert")
    }, 5000);
}




//example 2 
function consoleHello() {
    setTimeout(function timeOut() {
        console.log("Hello From Console");
    }, 2000);
}



//example 3 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
    63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
console.log(numbers)
function count() {
    const calculate = numbers.filter(i => i % 5 === 0);
    document.getElementById("print_count").innerHTML = calculate;
}

//example 4
const brands = ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "The North Face",
    "Under Armour", "Lululemon", "Patagonia", "Columbia"];
console.log(brands);
function findElement() {
    const findElement = brands.filter(i => i.includes('a'));
    document.getElementById("print_found_element").innerHTML = findElement;
}
