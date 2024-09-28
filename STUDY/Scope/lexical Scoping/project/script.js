function createCountdownTimer(durationInSeconds) {
    let remainingTime = durationInSeconds;
    let intervalId;

    
    function start(callback) {
        if (intervalId) return; 

        intervalId = setInterval(() => {
            remainingTime--;
            if (remainingTime <= 0) {
                clearInterval(intervalId);
                intervalId = null;
            }
            callback(remainingTime);
        }, 1000);
    }

    
    function stop() {
        clearInterval(intervalId);
        intervalId = null;
    }

    
    function getTime() {
        return remainingTime;
    }

    return { start, stop, getTime };
}

let timerList = [];

function createNewTimer() {
    const timeInput = document.getElementById('timeInput');
    const timeInSeconds = parseInt(timeInput.value);

    if (timeInSeconds > 0) {
        const timer = createCountdownTimer(timeInSeconds);
        timerList.push(timer);
        addTimerToDOM(timer);
        timeInput.value = ''; 
    }
}

function addTimerToDOM(timer) {
    const timersContainer = document.getElementById('timersContainer');

    const timerElement = document.createElement('div');
    const timeDisplay = document.createElement('span');
    const stopButton = document.createElement('button');

    timeDisplay.textContent = `Time Remaining: ${timer.getTime()} seconds`;

    stopButton.textContent = 'Stop';
    stopButton.onclick = () => timer.stop();

    timerElement.appendChild(timeDisplay);
    timerElement.appendChild(stopButton);
    timersContainer.appendChild(timerElement);

    timer.start((remainingTime) => {
        timeDisplay.textContent = `Time Remaining: ${remainingTime} seconds`;
    });
}
