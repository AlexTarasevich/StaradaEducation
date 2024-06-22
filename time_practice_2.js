function countdown(seconds) {
    let timer = setInterval(function() {
        if (seconds > 0) {
            console.log(`Секунд прошло: ${seconds}`);
            seconds--;
        } else {
            clearInterval(timer);
            console.log("Время вышло!");
        }
    }, 1000);
}

countdown(10);