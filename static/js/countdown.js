// countdown.js
function updateCountdown() {
    // Set target date for next monthsary (adjust as needed)
    const nextMonthsary = new Date('2025-04-16T00:00:00');
    const now = new Date();
    const diff = nextMonthsary - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item">${days}<span>days</span></div>
        <div class="countdown-item">${hours}<span>hours</span></div>
        <div class="countdown-item">${minutes}<span>minutes</span></div>
        <div class="countdown-item">${seconds}<span>seconds</span></div>
    `;
}

setInterval(updateCountdown, 1000);
document.addEventListener('DOMContentLoaded', updateCountdown);
