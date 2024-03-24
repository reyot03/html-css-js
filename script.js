function updateTime() {
    const clock = document.getElementById('clock');
    const secondHand = document.getElementById('secondHand');
    const minuteHand = document.getElementById('minuteHand');
    const hourHand = document.getElementById('hourHand');

    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secToDeg = (seconds / 60) * 360;
    const minToDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hrToDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secToDeg + 89.5}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg + 90}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg + 90}deg)`;

    // hourHand.style.transform = `rotate(${0 + 90}deg)`; //12
    // minuteHand.style.transform = `rotate(${30 + 90}deg)`; //1
    // secondHand.style.transform = `rotate(${60 + 90}deg)`; //2
}

updateTime();
setInterval(updateTime, 1000);
