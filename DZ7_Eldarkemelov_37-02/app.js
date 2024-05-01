function logic() {
    const text = document.querySelector("#text").value
    const textLen = text.length
    const numbers = document.querySelector(".color")
    const textElement = document.querySelector("#text")

    if (textLen > 100) {
        textElement.classList.remove("borderColor-blue");
        textElement.classList.add("borderColor-red");
    } else {
        textElement.classList.remove("borderColor-red");
        textElement.classList.add("borderColor-blue");
    }

    numbers.textContent = textLen + "/100";
}

