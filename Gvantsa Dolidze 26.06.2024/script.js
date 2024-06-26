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


const ul = document.getElementById('ul');
const api = 'https://api.restful-api.dev/objects';

// fetch GET request
function getData() {
fetch(api)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
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
}
getData();


// fetch POST request
function onSubmit(event) {
    
    event.preventDefault();
    
    const nameInput = document.getElementById('name').value;
    const yearInput = document.getElementById('year').value;
    const priceInput = document.getElementById('price').value;
    const cpuModelInput = document.getElementById('cpu_model').value;
    const hardDiskInput = document.getElementById('hard_disk').value;

    fetch(api, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput,
            data: {
                year: yearInput,
                price: priceInput,
                "CPU model": cpuModelInput,
                "Hard disk size": hardDiskInput,
            },
        })
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            getData();
            
        })
        .catch(error => console.error('Error:', error));
}

//მგავს შეცდომას მიგდებს ამიტომ ბოლომდე მომდევნო გაკვეთილისთვის გავაკეთებ. სხვა მაგალითზე გავარჩე და მიივხვდი როგორ უნდა დატის ლოკალურ მასივში შენახვა და შემდეგ ცხრილში ლისტში გამოტანა

// {
//     "error": "We are very sorry but you reached your limit of requests per day. Our current limit is equal to 100 requests per day. 
//     The reason for that is the fact that servers cost money and 200 requests per user per day is all that we can afford at the moment. Tomorrow the limit will
//      reset and you will be able to continue. Thanks and have a good day!"
//   }