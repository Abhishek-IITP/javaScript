const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// When the 'No' button is clicked, move it to a random position
noButton.addEventListener('click', function () {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// When the 'Yes' button is clicked, redirect to a page with a love message
yesButton.addEventListener('click', function () {
    window.location.href = 'love.html'; // This is the page it will redirect to
});