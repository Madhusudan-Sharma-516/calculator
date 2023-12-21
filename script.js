// Get input values
const firstValueInput = document.getElementById('firstValue');
const secondValueInput = document.getElementById('secondValue');

// Get result element
const resultElement = document.getElementById('result');

// Addition function
document.getElementById('additionBtn').addEventListener('click', () => {
    const result = Number(firstValueInput.value) + Number(secondValueInput.value);
    resultElement.textContent = result;
});

// Subtraction function
document.getElementById('subtractionBtn').addEventListener('click', () => {
    const result = Number(firstValueInput.value) - Number(secondValueInput.value);
    resultElement.textContent = result;
});

// Multiplication function
document.getElementById('multiplicationBtn').addEventListener('click', () => {
    const result = Number(firstValueInput.value) * Number(secondValueInput.value);
    resultElement.textContent = result;
});

// Division function
document.getElementById('divisionBtn').addEventListener('click', () => {
    const result = Number(firstValueInput.value) / Number(secondValueInput.value);
    resultElement.textContent = result;
});
