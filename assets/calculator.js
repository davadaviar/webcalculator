// Menyimpan data dan kondisi kalkulator
const calculator = {

    displayNumber: "0",
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false

}

// Fungsi update angka di layar dan menghapus data pada kalkulator
function updateDispaly() {

    document.querySelector("#displayNumber").innerHTML = calculator.displayNumber;

}

function clearCalculator() {

    calculator.displayNumber = displayNumber,
    calculator.operator = null,
    calculator.firstNumber = null,
    calculator.waitingForSecondNumber = false

}

// Fungsi memasukkan digit angka ke displayNumber
function inputDigit(digit) {

    calculator.displayNumber += digit;  // Teori operator x += y  -> x = x + y

}

