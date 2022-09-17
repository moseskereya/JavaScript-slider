function showMytime() {
    const mytime = document.querySelector('.time');
    const time = new Date();
    mytime.innerHTML = time.toLocaleTimeString();

}

setInterval(showMytime, 1000);