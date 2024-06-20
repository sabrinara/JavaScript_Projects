const time = document.getElementById('time');
const timeFormat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});
console.log(time);
const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    timeFormat.innerHTML = `${h > 12 ? 'PM' : 'AM'}`;
    
    if (h > 12 && h < 24) {
        h = h - 12;
    }

    h = ((h < 10) ? `0${h}` : h);
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;



    time.innerHTML = `${h} : ${m} : ${s}`;


};