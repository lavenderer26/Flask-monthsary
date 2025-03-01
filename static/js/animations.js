// animations.js
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    addClickEffect();
});

function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    const heartStyles = [
        'fa-heart',
        'fa-heart fa-beat',
        'fa-heart fa-beat-fade',
        'fa-heart fa-pulse'
    ];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('i');
        heart.className = `fas ${heartStyles[Math.floor(Math.random() * heartStyles.length)]} floating-heart`;
        // Random starting position
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        // Random animation delay
        heart.style.animationDelay = (Math.random() * 5) + 's';
        // Random color
        heart.style.color = `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, 0.8)`;
        container.appendChild(heart);
    }
}

function addClickEffect() {
    document.addEventListener('click', function(e) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart floating-heart click-heart';
        heart.style.left = (e.clientX - 10) + 'px';
        heart.style.top = (e.clientY - 10) + 'px';
        heart.style.position = 'fixed';
        heart.style.color = 'var(--primary-color)';
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 2000);
    });
}
