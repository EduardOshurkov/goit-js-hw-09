
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.style.fontSize = '24px';
refs.stopBtn.style.fontSize = '24px';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let changes = null;

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.disabled = true;
    const changes = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
        if (refs.startBtn.disabled = true) {
            refs.stopBtn.disabled = false;
        } else {
            refs.startBtn.disabled = false;
        }
    }, 1000);
    refs.stopBtn.addEventListener('click', () => {
        refs.stopBtn.disabled = true;
        if (refs.stopBtn.disabled = true) {
            refs.startBtn.disabled = false;
        }
         else {
            refs.stopBtn.disabled = false;
        };
    clearInterval(changes);
});
});
