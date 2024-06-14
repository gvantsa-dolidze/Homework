document.addEventListener('DOMContentLoaded', () => {

    let city_Arr = [
        'თბილისი',
        'ბათუმი',
        'ბაკურიანი',
        'ურეკი',
        'ყვარელი',
        'ფოთი',
        'მარტვილი'
    ];
    let city_arr_2 = [
        'გორი',
        'თელავი',
        'რუსთავი',
        'გურჯაანი',
        'ლაგოდეხი',
        'საგარეჯო',
        'სიღნაღი'
    ];
    const container = document.getElementById("container");
    const ul = document.getElementById('ul');


    const createHtml = () => {
        const input = document.createElement('input');
        input.placeholder = "Add City";
        container.appendChild(input);

        const addBtn = document.createElement('button');
        addBtn.innerText = "Add";
        container.appendChild(addBtn);

        addBtn.addEventListener('click', () => {
            const newCity = input.value.trim();
            if (newCity.length < 2 || newCity.length > 40) {
                alert("ტექსტი არ უნდა იყოს 2 სიმბოლოზე ნაკლები და 40 სიმბოლოზე მეტი");
            } else {
                city_Arr.push(newCity);
                input.value = '';
                createDefaultList();
            }
        })

        const replaceBtn = document.createElement('button');
        replaceBtn.innerText = 'Replace';
        container.appendChild(replaceBtn);

        replaceBtn.addEventListener('click', () => {
            city_Arr = [...city_arr_2];
            createDefaultList();
        })
    }



    const createDefaultList = () => {
        ul.innerHTML = "";
        city_Arr.forEach((list, index) => {
            const li = document.createElement('li');
            li.textContent = list;
            ul.appendChild(li);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => {
                city_Arr.splice(index, 1);
                createDefaultList();
            });
        });
    }



    createDefaultList()
    createHtml()

});