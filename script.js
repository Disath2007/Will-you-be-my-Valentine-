const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

document.addEventListener("mousemove", function (e) {
    createHeart(e.pageX, e.pageY);
});

function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = " 🐽 "; // You can also use 💖 or 💕

    // Set the position at cursor
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Randomize size
    let size = Math.floor(Math.random() * 50) + 10; // Random between 10px-30px
    heart.style.fontSize = `${size}px`;

    // Random X offset for natural movement
    let xMovement = Math.floor(Math.random() * 40) - 20; // -20px to +20px

    // Apply animation with randomness
    heart.style.animation = `floatUp 1.5s ease-out forwards`;
    heart.style.transform = `translateX(${xMovement}px)`;

    // Add to the page
    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 1500);
}
