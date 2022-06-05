import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startTime = Date.now();
console.log(startTime);


flatpickr("#datetime-picker", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",

  "disable": [
        function(date) {
            // return true to disable
            return (date.getDay() === 0 || date.getDay() === 6);

        }
    ],
    "locale": {
        "firstDayOfWeek": 1 // start week on Monday
    }

});


