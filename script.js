function max3 (number1, number2, number3) {
    if (number1 > number2) {
        if (number1 > number3) {
            return number1
        } else {
            return number3
        }
    } else {
        if (number2 > number3) {
            return number2
        } else {
            return number3
        }
    }
}

let cislo1 = prompt("Zadejte první číslo k porovnání")
let cislo2 = prompt("Zadejte druhé číslo k porovnání")
let cislo3 = prompt("Zadejte třetí číslo k porovnání")

document.body.innerHTML = "Nejvyšší číslo z výběru je: " + max3(cislo1, cislo2, cislo3)