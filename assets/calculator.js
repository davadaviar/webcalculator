// Menyimpan data dan kondisi kalkulator
const calculator = {

    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false

}

// Fungsi update angka di layar dan menghapus data pada kalkulator
function updateDisplay() {

    document.querySelector("#displayNumber").innerText = calculator.displayNumber;

}

function clearCalculator() {

    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;

}

// Fungsi memasukkan digit angka ke displayNumber
function inputDigit(digit) {

    if(calculator.displayNumber === '0') {

        calculator.displayNumber = digit;

    } else {

        calculator.displayNumber += digit;

    }

}

// Fungsi operator
function inverseNumber() {

    if(calculator.displayNumber === '0') {

        return;

    }

    calculator.displayNumber = calculator.displayNumber * -1;

}

function handleOperator(operator) {

    if(!calculator.waitingForSecondNumber) {

        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';

    } else {

        alert("Operator sudah ditetapkan");

    }

}

function performCalculation() {

    if(calculator.firstNumber == null || calculator.operator == null) {

        alert("Anda belum menetapkan operator");
        return;

    }

    let result = 0;

    if(calculator.operator === "+") {

        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);

    } else {

        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);

    }

    const history = {

        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result

    }

    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();

}

// Menginisialisasi seluruh elemen button dan memberikan event
const buttons = document.querySelectorAll(".button");

for(let button of buttons) {

    button.addEventListener('click', function(event) {
    
        // Mendapatkan objek elemen yg diklik
        const target = event.target;

        if(target.classList.contains('clear')) {

            clearCalculator();
            updateDisplay();
            return;

        }

        if(target.classList.contains('negative')) {

            inverseNumber();
            updateDisplay();
            return;

        }

        if(target.classList.contains('equals')) {

            performCalculation();
            updateDisplay();
            return;

        }

        if(target.classList.contains('operator')) {

            handleOperator(target.innerText);
            return;

        }
    
        inputDigit(target.innerText);
        updateDisplay();

    })

}





