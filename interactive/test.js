const memoryGame = document.getElementById('memory-game');
const scoreDisplay = document.getElementById('score');

const symbols = ['🍎', '🍌', '🍒', '🥝', '🍇', '🍊', '🍋', '🍉'];
const totalPairs = symbols.length;
let score = 0;
let selectedCard = null;
let pairsFound = 0;

function initializeGame() {
    const cards = symbols.concat(symbols);
    cards.sort(() => Math.random() - 0.5);

    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.addEventListener('click', () => selectCard(card));
        const front = document.createElement('div');
        front.classList.add('front');
        card.appendChild(front);
        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = symbol;
        card.appendChild(back);
        memoryGame.appendChild(card);
    });
}

function selectCard(card) {
    if (card === selectedCard || card.classList.contains('flip')) {
        return;
    }

    card.classList.add('flip');

    if (!selectedCard) {
        selectedCard = card;
    } else {
        const symbol1 = selectedCard.dataset.symbol;
        const symbol2 = card.dataset.symbol;
        if (symbol1 === symbol2) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            pairsFound++;
            if (pairsFound === totalPairs) {
                setTimeout(() => {
                    alert('Congratulations! You won!');
                }, 500);
            }
            selectedCard = null;
        } else {
            setTimeout(() => {
                selectedCard.classList.remove('flip');
                card.classList.remove('flip');
                selectedCard = null;
            }, 1000);
        }
    }
}

initializeGame();