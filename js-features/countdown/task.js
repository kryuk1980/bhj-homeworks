const timerCount = function () {
    const elementTimer = document.getElementById("timer");
    if (elementTimer.textContent == 0) {
        alert("«Вы победили в конкурсе!»");
        clearInterval(intervalId);
    } else {
        elementTimer.textContent--;
    }
};

const intervalId = setInterval(timerCount, 1000)