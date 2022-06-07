import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const fp = flatpickr("#datetime-picker", {
    enableTime: true,
    dateFormat: "F j, H:i",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= fp.defaultDate) {
            refs.startBtn.disabled = true;
            alert('Please');
            return;
        }
        refs.startBtn.disabled = false;
    console.log(selectedDates[0]);
  }
});

console.log(fp);
// _____________________________ Timer


const refs = {
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    
};

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return;
        }

        const startTime = Date.now();
        const calendarDate = fp.selectedDates[0].getTime();
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = calendarDate - currentTime; // разница во времени 
            const time = this.getTimeComponents(deltaTime);

            if (deltaTime <= 0) {
                clearInterval(this.intervalId);
                return;
            }
            this.onTick(time)
        }, 1000);
    }

pad(value) {
    return String(value).padStart(2, '0');
}

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs }; 

}
}


function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;
}


const timer = new Timer({
    onTick: updateClockface
});


refs.startBtn.addEventListener('click', timer.start.bind(timer));