//  ზემოთ მოცემული აპიდან წამოიღეთ ინფორმაცია ჯავასკრიპტში და მასში მოთავზებული დატიდან გამოიტანეთ HTML ში ლისტის სახით:
//  core_serial, original_launch და details, ამ ცვლადებიდან თუ რომელიმე იქნება ცარიელი შეამოწმეთ და არსებულის შემთხვევაში გამოიტანეთ ტექსტი: 'ვერ მოიძებნა

const apiUrl = 'https://api.spacexdata.com/v3/cores';
const ul1 = document.getElementById('ul1');
const ul2 = document.getElementById('ul2');
const ul3 = document.getElementById('ul3');

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let item = data[i];

            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li')

            ul1.appendChild(li1);
            ul2.appendChild(li2);
            ul3.appendChild(li3);

            li1.textContent = item.core_serial || 'ვერ მოიძებნა';
            li2.textContent = item.original_launch || 'ვერ მოიძებნა';
            li3.textContent = item.details || 'ვერ მოიძებნა';

            if (li1.textContent === 'ვერ მოიძებნა') {
                li1.style.color = 'red';
            }
            if (li2.textContent === 'ვერ მოიძებნა') {
                li2.style.color = 'red';
            }
            if (li3.textContent === 'ვერ მოიძებნა') {
                li3.style.color = 'red';
            }
        }
    })
    .catch((err) => console.error(`There was an error: ${err}`));






// // 01. core_serial

// fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let i = 0; i < data.length; i++) {
//             let item = data[i];
//             let li = document.createElement('li');
//             ul1.appendChild(li);
//             !item.core_serial ? li.textContent = 'ვერ მოიძებნა' : li.textContent = item.core_serial;
//         }
//     })
//     .catch((err) => console.error(`There was an error: ${err}`));




//     // 02. original_launch

//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let i = 0; i < data.length; i++) {
//             let item = data[i];

//             let li = document.createElement('li');
//             ul2.appendChild(li);
//             !item.original_launch ? li.textContent = 'ვერ მოიძებნა' : li.textContent = item.original_launch;
//         }
//     })
//     .catch((err) => console.error(`There was an error: ${err}`));




//     // 03. details

//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let i = 0; i < data.length; i++) {
//             let item = data[i];

//             let li = document.createElement('li');
//             ul3.appendChild(li);
//             !item.details ? li.textContent = 'ვერ მოიძებნა' : li.textContent = item.details;
//         }
//     })
//     .catch((err) => console.error(`There was an error: ${err}`));

