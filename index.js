/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputField = document.querySelector(".input-field");
const convertButton = document.querySelector(".convert-button");
const lengthParagraph = document.querySelector(".lenght-result");
const volumePragraph = document.querySelector(".volume-result");
const massParagraph = document.querySelector(".mass-result");

convertButton.addEventListener('click', () => {
    renderLength(inputField.value);
    renderVolume(inputField.value);
    renderMass(inputField.value);
})

const renderLength = (input) => {
    lengthParagraph.textContent = `
        ${input} meters = ${(input * 3.281).toFixed(3)} feet
        |
        ${input} feet = ${(input / 3.281).toFixed(3)} meters
    `;
}

const renderVolume = (input) => {
    volumePragraph.textContent = `
        ${input} liters = ${(input * 0.264).toFixed(3)} gallons
        |
        ${input} gallons = ${(input / 0.264).toFixed(3)} liters
    `;
}

const renderMass = (input) => {
    massParagraph.textContent = `
        ${input} kilos = ${(input * 2.204).toFixed(3)} pounds
        |
        ${input} pounds = ${(input / 2.204).toFixed(3)} kilos
    `;
}