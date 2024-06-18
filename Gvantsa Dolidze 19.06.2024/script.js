//   01.  გააკეთეთ ფერების რანდომული გენერატორი და ყოველი გვერდის დარეფრეშებაზე body -ს შეუცვალეთ დაგენერირებული ფერით ფონი

let body = document.getElementById('body');
let colors = [
    '#DAF7A6',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#8D7486',
    '#8F868C',
    '#DC4BB1'];
const randomColor = (array) => array[Math.floor(Math.random() * array.length)];
body.style.backgroundColor = randomColor(colors);


// 02. გააკეთეთ შემთხვევითი რიცხვების გენერატორი და გამოიტანეთ HTML-ში

let result = document.getElementById('result');
const resultBtn = document.getElementById('result_btn');
resultBtn.addEventListener('click', () => {
    result.innerHTML = Math.floor(Math.random() * 1000);
    result.style.backgroundColor = randomColor(colors);
});




// 03. გააკეთეთ შემთხვევითი პაროლის გენერატორი, პაროლი უნდა შეიცავდეს (A-Z a-z 0-9 და სიმბოლოები) პაროლის სიგრძე უნდა იყოს 20 ჩარაქტერი და გამოიტანეთ HTML-ში

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const resultBtnPass = document.getElementById('result_btn_pass');
const resultPass = document.getElementById('result_pass');
resultBtnPass.addEventListener('click', () => {
    let generatedPassword = '';
    for (let i = 0; i < 20; i++) {
        generatedPassword += letters.charAt(Math.random() * letters.length);
    }
    resultPass.textContent = generatedPassword;
    resultPass.style.borderColor = randomColor(colors);
    resultPass.style.color = randomColor(colors);
});


// 04.გააკეთეთ ქალაქების მასივი სადაც მოთავსებული იქნება 10 სხვადასხვა ქალაქი, ყოველ რეფრეშზე შემთხვეითობის პრონციპით ამოიღეთ ერთი ქალაქი და გამოიტანეთ HTML-ში

const cities = [
    'PRAGUE, CZECH REPUBLIC',
    'LOS ANGELES, USA',
    'ADDIS ABABA, ETHIOPIA',
    'HONOLULU, HAWAII (USA)',
    'WASHINGTON D.C, USA',
    'DHAKA, BANGLADESH',
    'OSLO, NORWAY',
    'NASSAU, BAHAMAS',
    'LONDON, ENGLAND',
    'MEXICO CITY, MEXICO'
];
const resultTravel = document.getElementById('result_travel');
const resultBtnTravel = document.getElementById('result_btn_Travel');
resultBtnTravel.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * cities.length);
    resultTravel.innerHTML = cities[randomIndex];
    resultTravel.style.color = randomColor(colors);

})