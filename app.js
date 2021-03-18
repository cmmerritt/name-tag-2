const nameText = document.getElementById('name');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');


nameButton.addEventListener('click', () => {
    const nameInputValue = nameInput.value
    nameText.textContent = nameInputValue;
});

const blueButton = document.getElementById('blue-button');

blueButton.addEventListener('click', () => {
    document.getElementById('change-my-color').style.backgroundColor="blue";
});

const pinkButton = document.getElementById('pink-button');

pinkButton.addEventListener('click', () => {
    document.getElementById('change-my-color').style.backgroundColor="pink";
});

const sageButton = document.getElementById('sage-button');

sageButton.addEventListener('click', () => {
    document.getElementById('change-my-color').style.backgroundColor="lightgreen";
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

//count 

//let count;
