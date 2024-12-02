function updateClock() {
    const clock = document.getElementById('clock_update');

    function displayTime() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clock.textContent = time;
    }

    displayTime();
    setInterval(displayTime, 1000);
}

document.addEventListener('DOMContentLoaded', updateClock);