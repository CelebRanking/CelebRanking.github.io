// Modal script
var startGameModal = document.getElementById('startGameModal');
var nextPictureModal = document.getElementById('nextPictureModal');
window.onload = function() {
    startGameModal.style.display = 'block';
};
function startGame() {
    startGameModal.style.display = 'none';
    resetTimer();
    revealImage();
}

var people = [
    { name: "Jennifer Lawrence", image: "../assets/img/2024/Jennifer Lawrence.jpg" },
    { name: "Megan Fox", image: "../assets/img/2024/Megan Fox.jpg" },
    { name: "Brie Larson", image: "../assets/img/2024/Brie Larson.jpg" },
    { name: "Camila Cabello", image: "../assets/img/2024/Camila Cabello.jpg" },
    { name: "Dua Lipa", image: "../assets/img/2024/Dua Lipa.jpg" },
    { name: "Emilia Clarke", image: "../assets/img/2024/Emilia Clarke.jpg" },
    { name: "Gigi Hadid", image: "../assets/img/2024/Gigi Hadid.jpg" },
    { name: "Sydney Sweeney", image: "../assets/img/2024/Sydney Sweeney.jpg" },
    { name: "Hailee Steinfeld", image: "../assets/img/2024/Hailee Steinfeld.jpg" },
    { name: "Elizabeth Olsen", image: "../assets/img/2024/Elizabeth Olsen.jpg" },
    { name: "Florence Pugh", image: "../assets/img/2024/Florence Pugh.jpg" },
    { name: "Emma Watson", image: "../assets/img/2024/Emma Watson.jpg" },
    { name: "Natalie Portman", image: "../assets/img/2024/Natalie Portman.jpg" },
    { name: "Salma Hayek", image: "../assets/img/2024/Salma Hayek.jpg" },
    { name: "Sadie Sink", image: "../assets/img/2024/Sadie Sink.jpg" },
    { name: "Jessica Chastain", image: "../assets/img/2024/Jessica Chastain.jpg" },
    { name: "Kate Upton", image: "../assets/img/2024/Kate Upton.jpg" },
    { name: "Madison Beer", image: "../assets/img/2024/Madison Beer.jpg" }
    // Add more people as needed
];

var counter = 20;
var blurLevel = 20;
var personIndex;
var timerInterval;
var score = 0;
var gamePaused = false;

function getRandomPerson() {
    return people.splice(Math.floor(Math.random() * people.length), 1)[0];
}

function revealImage() {
    clearInterval(timerInterval);
    document.getElementById('counter').textContent = 'Time Left: 0';
    var randomPerson = getRandomPerson();
    personIndex = randomPerson;
    document.getElementById('image').style.filter = 'blur(20px)';
    document.getElementById('image').src = randomPerson.image;
    resetTimer();
}

function updateCounter() {
    counter--;
    document.getElementById('counter').textContent = 'Time Left: ' + counter;
    if (counter <= 0) {
        revealImage();
    } else {
        blurLevel -= 1; // Decrease blur level faster each second
        document.getElementById('image').style.filter = 'blur(' + blurLevel + 'px)';
    }
}

function resetTimer() {
    counter = 20;
    blurLevel = 20;
    timerInterval = setInterval(updateCounter, 1000);
}

function checkGuess() {
    if (!gamePaused) {
        var guess = document.getElementById('guess').value.toLowerCase();
        var result = document.getElementById('result');
        if (guess === personIndex.name.toLowerCase()) {
            result.textContent = "Correct! It's " + personIndex.name + "!";
            score++;
            document.getElementById('score').textContent = 'Score: ' + score;
            if (score === 10) {
                document.getElementById('congrats-popup').style.display = 'block';
                pauseGame();
            } else {
                revealImage(); // Directly proceed to the next picture
            }
        } else {
            result.textContent = "Sorry, that's incorrect. Try again!";
        }
        // Clear input field after submitting guess
        document.getElementById('guess').value = '';
    }
}

document.getElementById('guess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkGuess();
    }
});

function pauseGame() {
    clearInterval(timerInterval);
    gamePaused = true;
}

function restartGame() {
    document.getElementById('congrats-popup').style.display = 'none';
    score = 0;
    document.getElementById('score').textContent = 'Score: ' + score;
    gamePaused = false;
    resetTimer();
    revealImage();
}

document.getElementById("gamehub-btn").addEventListener("click", function() {
    window.location.href = "gamehub.html";
  });