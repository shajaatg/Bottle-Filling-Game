let score = 0;
let level = 1;
const bottlesContainer = document.getElementById('bottlesContainer');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');
const colorPalette = document.getElementById('colorPalette');
const nextLevelBtn = document.getElementById('nextLevelBtn');

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let selectedColor = '';

function createBottles() {
    bottlesContainer.innerHTML = '';
    for (let i = 0; i < level + 2; i++) {
        const bottle = document.createElement('div');
        bottle.classList.add('bottle');
        bottle.style.backgroundColor = 'white';
        bottle.addEventListener('click', fillBottle);
        bottlesContainer.appendChild(bottle);
    }
}

function fillBottle(event) {
    if (selectedColor) {
        event.target.style.backgroundColor = selectedColor;
        score += 10;
        scoreElement.innerText = score;
    }
}

function createColorPalette() {
    colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color');
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener('click', () => {
            selectedColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });
}

nextLevelBtn.addEventListener('click', () => {
    level++;
    levelElement.innerText = level;
    createBottles();
});

function redirect() {
    window.open('https://example.com', '_blank');
}

setInterval(redirect, 15000);

createColorPalette();
createBottles();
