
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let changes = null;

refs.startBtn.addEventListener('click', () => {
    const changes = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.stopBtn.addEventListener('click', () => {
    clearInterval(changes);
});
});
