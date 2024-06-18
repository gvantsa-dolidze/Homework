//   01.  გააკეთეთ ფერების რანდომული გენერატორი და ყოველი გვერდის დარეფრეშებაზე body -ს შეუცვალეთ დაგენერირებული ფერით ფონი

let body = document.getElementById('body');
let colors = ['red', 'gray', 'green', 'purple', 'pink', 'yellow', 'blue', 'lightblue', 'white'];
const randomColor = (array) => array[Math.floor(Math.random() * array.length)];
body.style.backgroundColor = randomColor(colors);


// გააკეთეთ შემთხვევითი რიცხვების გენერატორი და გამოიტანეთ HTML-ში

let result = document.getElementById('result');
const resultBtn = document.getElementById('result_btn');
resultBtn.addEventListener('click', () => result.innerHTML = Math.floor(Math.random() * 1000));



















//   01.  გააკეთეთ ფერების რანდომული გენერატორი და ყოველი გვერდის დარეფრეშებაზე body -ს შეუცვალეთ დაგენერირებული ფერით ფონი

// let letters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
// let hashtag ='#';
// for(let i = 0; i < 6; i++) {
//      hashtag += letters.charAt(Math.random() * letters.length);

// }
// console.log(hashtag)