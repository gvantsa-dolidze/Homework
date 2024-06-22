// API:
// https://api.spacexdata.com/v3/launches

// გამოიყენეთ Bootstrap Card კომპონენტი, დაფეჩეთ ზემოთ მოცემული API,  ლისტის სახით გამოიტანეთ ქარდები, ქარდების ინფორმაცია შეავსეთ  API-დან მოსული ცვლადებით:  
// 1. სურათი mission_patch
// 2. დეტალები: details
// 3. ხომალდის სახელი: rocket_name
// https://getbootstrap.com/docs/4.0/components/card/

const container = document.querySelector('#container')

fetch('https://api.spacexdata.com/v3/launches')
    .then(response => response.json())

    .then(data => {
        let allCards = '';
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            // console.log(item.links.mission_patch)
            // console.log(item.details)
            // console.log(item.rocket.rocket_name)
            allCards += `
            <div class="card" style="width: 18rem;">
                 <img src="${item.links.mission_patch}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.rocket.rocket_name || ''}</h5>
                  <p class="card-text">${item.details || ''}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
        }
        container.innerHTML = allCards;
    })

    .catch(error => console.error('Error:', error));