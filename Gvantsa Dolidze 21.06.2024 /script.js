//  ზემოთ მოცემული აპიდან წამოიღეთ ინფორმაცია ჯავასკრიპტში და მასში მოთავზებული დატიდან გამოიტანეთ HTML ში ლისტის სახით:
//  core_seria, original_launch და details, ამ ცვლადებიდან თუ რომელიმე იქნება ცარიელი შეამოწმეთ და არსებულის შემთხვევაში გამოიტანეთ ტექსტი: 'ვერ მოიძებნა

const apiUrl = 'https://api.spacexdata.com/v3/cores';
const ul1 = document.getElementById('ul1');
const ul2 = document.getElementById('ul2');
const ul3 = document.getElementById('ul3');


// 01. core_serial
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            let item = data[i];

            let li = document.createElement('li');
            ul1.appendChild(li);
            !item.core_serial ? li.textContent = 'ვერ მოიძებნა' : li.textContent = item.core_serial;
        }
    })
    .catch((err) => console.error(`There was an error: ${err}`));

    // 02. original_launch
    
