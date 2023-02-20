// displaying current month
monthEl = document.getElementById("month");
const date = new Date();
monthEl.innerText = date.toLocaleString("en", { month: "long" });

// displaying the current day
dayEl = document.getElementById("weekday");
dayEl.innerText = date.toLocaleString('en', {weekday: 'long'});

// displaying the current date
dateEl = document.getElementById("date");
currentDate = new Date().getDate();
dateEl.innerText = currentDate;

// displaying the current year
yearEl = document.getElementById("year");
currentYear = new Date().getFullYear();
yearEl.innerText = currentYear;
