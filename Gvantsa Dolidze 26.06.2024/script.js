//   API:
//   https://api.restful-api.dev/objects


//   Request JSON Example:
//   {
//   "name": "Apple MacBook Pro 16",
//   "data": {
//   "year": 2019,
//   "price": 1849.99,
//   "CPU model": "Intel Core i9",
//   "Hard disk size": "1 TB"
//   }
//   }

// გააკეთეთ ფორმა და POST მეთოდით გააგზავნეთ ფორმაში შეყვანილი ინფორმაცია ზემოთ აღნიშნულ მისამართზე,
// რესპონსში დაბრუნებული დატა შეინახეთ მასივში და გამოიტანეთ ლისტის სახით ფორმის გვერძე.

const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const yearInput = document.getElementById('year');
const priceInput = document.getElementById('price');
const cpuModelInput = document.getElementById('cpu_model');
const hardDiskInput = document.getElementById('hard_disk');
const submitBtn = document.getElementById('btn');
const ul = document.getElementById('ul');
const api = 'https://api.restful-api.dev/objects';

// fetch GET request

fetch(api)
    .then(response => response.json())
    .then(about => {

        for (let i = 0; i < about.length; i++) {
            const item = about[i];
            console.log(item);
            ul.innerHTML += `
           <li>
                    <p><span>Id: </span> ${item.id}</p>
                    <p><span>Name: </span> ${item.name || "არ არის მითითებული"}</p>
                    <p><span>Year: </span> ${item.data && item.data.year ? item.data.year : "არ არის მითითებული"}</p>
                    <p><span>Price: </span> ${item.data && item.data.price ? item.data.price : "არ არის მითითებული"}</p>
                    <p><span>CPU Model: </span> ${item.data && item.data.generation ? item.data.generation : "არ არის მითითებული"}</p>
                    <p><span>Hard Disk Size: </span> ${item.data && item.data.capacity ? item.data.capacity : "არ არის მითითებული"}</p>
                </li>
        `
        }

    })
    .catch(error => console.error('Error:', error));

    // fetch POST request