const nameText = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');


nameButton.addEventListener('click', () => {
    const nameInputValue = nameInput.value;
    nameText.textContent = nameInputValue;
    countButtonClicks();
});

const blueButton = document.getElementById('blue-button');

blueButton.addEventListener('click', () => {
    document.getElementById('sticker').style.backgroundColor="blue";
});

const pinkButton = document.getElementById('pink-button');

pinkButton.addEventListener('click', () => {
    document.getElementById('sticker').style.backgroundColor="pink";
});

const sageButton = document.getElementById('sage-button');

sageButton.addEventListener('click', () => {
    document.getElementById('sticker').style.backgroundColor="lightgreen";
});

const pronounText = document.getElementById('pronouns');
const pronounInput = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');


pronounButton.addEventListener('click', () => {
    const pronounInputValue = pronounInput.value
    pronounText.textContent = pronounInputValue;
});

const fontButton = document.getElementById('font-button');

fontButton.addEventListener('click', () => {
    document.getElementById('name').style.fontFamily="Georgia";
    document.getElementById('pronouns').style.fontFamily="Georgia";
});

// count number of times button has been clicked
// create counter

// set counter to zero

//increment counter each time button is clicked

//display counter on page

const totalText = document.getElementById('total-button-click-display');

let count = 0;

function countButtonClicks() {
    count++;
    totalText.innerHTML = count;
};