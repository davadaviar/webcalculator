// Menyimpan data dan kondisi kalkulator
const calculator = {

    displayNumber: "0",
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false

}

// Fungsi update angka di layar dan menghapus data pada kalkulator
function updateDisplay() {

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

    if(calculator.displayNumber === "0") {

        calculator.displayNumber = digit;

    } else {

        calculator.displayNumber += digit;

    }

}

// Menginisialisasi seluruh elemen button dan memberikan event
const buttons = document.querySelectorAll(".button");

for(let button of buttons) {

    button.addEventListener("click", function(event) {
    
        // Mendapatkan objek elemen yg diklik
        const target = event.target;

        if(target.classList.contains("clear")) {

            clearCalculator();
            updateDisplay();

            return
            
        }
    
        inputDigit(target.innerText);
        updateDisplay();

    });

}





