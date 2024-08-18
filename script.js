function appendValue(value) {
    document.calculator.display.value += value;
}

function deleteLastChar() {
    const displayValue = document.calculator.display.value;
    document.calculator.display.value = displayValue.slice(0, -1);
}

function resetCalculator() {
    document.calculator.display.value = '0';
}

function calculateResult() {
    try {
        document.calculator.display.value = eval(document.calculator.display.value);
    } catch (error) {
        document.calculator.display.value = 'Error';
    }
}
