let noClickCount = 0;

const phrases = [
    "No", 
    "Are you sure?", 
    "Really sure??", 
    "Pleeaaaseee", 
    "Don't do this to me", 
    "I'm gonna cry...", 
    "You're breaking my heart ;("
];

function handleNoClick() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    // Change No button text
    noButton.innerText = phrases[Math.min(noClickCount, phrases.length - 1)];
    
    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * 1.5) + 'px';
    yesButton.style.width = 'auto';
    yesButton.style.padding = '20px 40px';
    
    noClickCount++;
}

function handleYesClick() {
    // Keeps the same GIF but changes the text and removes buttons
    document.getElementById('question').innerText = "Yay!!! See you on the 14th! ❤️";
    document.querySelector('.buttons').style.display = 'none';
}