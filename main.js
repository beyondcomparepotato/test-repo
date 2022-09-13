let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];

shuffle(cards);

console.log(cards);

function shuffle(arr) {
    let currentIndex = arr.length;
    
    while(currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        currentIndex -= 1;

        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 40],
    ["socks", 10],
    ["underwear", 70],
]);

let total = 0;
total += store.get("t-shirt");
total += store.get("socks");

store.set("hat", 40);
store.delete("hat");
console.log(store.has("hat"));

store.forEach((value, key) => console.log(`${key} ${value}`));
console.log(total);

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive() {
        console.log(this.model);
    },

    brake() {
        console.log(this.year);
    }
};

car.drive();
car.brake();

class Player {
    score = 0;
    pause() {
        console.log("You paused the game");
    }
    exit() {
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
player1.score += 1;
console.log(player1.score);
console.log(player2.score);
player1.pause();
player1.exit();
player2.exit();

class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying currently`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student1.study();

const product = document.getElementById("product");
class Product {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }
}

const macbook = new Product("MacBook Pro 2022", 1999);
product.innerHTML = `${macbook.product} $${macbook.price}`;
