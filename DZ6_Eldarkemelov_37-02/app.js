let numbers = [];
const button = document.querySelector("#b");
let sortNumber = document.querySelectorAll(".value");

function generateNumbers() {
    numbers = [];
    for (let i = 0; i < 6; i++) {
        let number = Math.floor(Math.random() * 99) + 1;
        let formattedNumber = String(number).padStart(2, "0");
        numbers.push(formattedNumber);
    }
    return numbers;
}

function sort() {
    generateNumbers();
    let nnumber = numbers.join("");
    for (let i = 0; i < 6; i++) {
        sortNumber[i].innerText = nnumber[i];
    }
}

button.addEventListener("click", sort);
