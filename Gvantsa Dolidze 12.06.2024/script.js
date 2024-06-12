// გააკეთეთ ობიექტი სადაც განსაზღვრული იქნება მობილურის მონაცემებ 
// (ბრენდი, მოდელი, ფერი, მეხსიერება, გამოშვების წელი), 
// ამავე ობიექტს განუსაზღვრეთ 2 მეთოდი, 
// 1 მეთოდი უნდა ბეჭდავდეს ერთ სტრინგად ამ მონაცემებს,
// 2 მეთოდი უნდა ანახლებდეს მობილურის ყველა მონაცემს.


const mobile = {
    brand: 'Samsung',
    model: 'S23 Ultra',
    color: 'White',
    ram: 12,
    memory: 252,
    year: 2023,
    getFullInfo: function () {
        return `${this.brand} ${this.model} ${this.color} ${this.ram}/${this.memory} ${this.year}`
    },
    updateMobile: function (newBrand, newModel, newColor, newMemory, newYear) {
        this.brand = newBrand;
        this.model = newModel;
        this.color = newColor;
        this.memory = newMemory;
        this.year = newYear;
    }
};

console.log("After update:")
console.log(mobile.getFullInfo());

mobile.updateMobile('Samsung', 'S24 Ultra', 'Gray', 512, 2024);

console.log("Before update:")
console.log(mobile.getFullInfo());

document.getElementById("click-btn").addEventListener('click', () => {
    document.getElementById("result").textContent = mobile.getFullInfo();
})







