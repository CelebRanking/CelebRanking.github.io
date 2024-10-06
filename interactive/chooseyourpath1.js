const celebs1 = document.querySelectorAll('#celeb-selection .celeb');
const celebs2 = document.querySelectorAll('#celeb-selection-2 .celeb');
const celebs3 = document.querySelectorAll('#celeb-selection-3 .celeb');
const celebs4 = document.querySelectorAll('#celeb-selection-4 .celeb');
const celebs5 = document.querySelectorAll('#celeb-selection-5 .celeb');
const celebs6 = document.querySelectorAll('#celeb-selection-6 .celeb');
const output = document.getElementById('output');

const celebSelection2 = document.getElementById('celeb-selection-2');
const celebSelection3 = document.getElementById('celeb-selection-3');
const celebSelection4 = document.getElementById('celeb-selection-4');
const celebSelection5 = document.getElementById('celeb-selection-5');
const celebSelection6 = document.getElementById('celeb-selection-6');

let selectedCelebs = [null, null, null, null, null, null];

celebs2.forEach(celeb => celeb.classList.add('disabled'));
celebs3.forEach(celeb => celeb.classList.add('disabled'));
celebs4.forEach(celeb => celeb.classList.add('disabled'));
celebs5.forEach(celeb => celeb.classList.add('disabled'));
celebs6.forEach(celeb => celeb.classList.add('disabled'));

celebs1.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        resetLowerSelections(2);
        celebSelection3.classList.add('hidden');
        celebSelection4.classList.add('hidden');
        celebSelection5.classList.add('hidden');
        celebSelection6.classList.add('hidden');

        if (selectedCelebs[0] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[0] = null;
            celebSelection2.classList.add('hidden');
        } else {
            if (selectedCelebs[0] !== null) {
                celebs1[selectedCelebs[0]].classList.remove('selected');
            }
            selectedCelebs[0] = index;
            celeb.classList.add('selected');
            celebSelection2.classList.remove('hidden');
            updateCelebs(2, selectedCelebs[0]);
        }
        updateOutput();
    });
});

celebs2.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        resetLowerSelections(3);
        celebSelection4.classList.add('hidden');
        celebSelection5.classList.add('hidden');
        celebSelection6.classList.add('hidden');

        if (selectedCelebs[1] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[1] = null;
            celebSelection3.classList.add('hidden');
        } else {
            if (selectedCelebs[1] !== null) {
                celebs2[selectedCelebs[1]].classList.remove('selected');
            }
            selectedCelebs[1] = index;
            celeb.classList.add('selected');
            celebSelection3.classList.remove('hidden');
            updateCelebs(3, selectedCelebs[1]);
        }
        updateOutput();
    });
});

celebs3.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        resetLowerSelections(4);
        celebSelection5.classList.add('hidden');
        celebSelection6.classList.add('hidden');

        if (selectedCelebs[2] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[2] = null;
            celebSelection4.classList.add('hidden');
        } else {
            if (selectedCelebs[2] !== null) {
                celebs3[selectedCelebs[2]].classList.remove('selected');
            }
            selectedCelebs[2] = index;
            celeb.classList.add('selected');
            celebSelection4.classList.remove('hidden');
            updateCelebs(4, selectedCelebs[2]);
        }
        updateOutput();
    });
});

celebs4.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        resetLowerSelections(5);
        celebSelection6.classList.add('hidden');

        if (selectedCelebs[3] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[3] = null;
            celebSelection5.classList.add('hidden');
        } else {
            if (selectedCelebs[3] !== null) {
                celebs4[selectedCelebs[3]].classList.remove('selected');
            }
            selectedCelebs[3] = index;
            celeb.classList.add('selected');
            celebSelection5.classList.remove('hidden');
            updateCelebs(5, selectedCelebs[3]);
        }
        updateOutput();
    });
});

celebs5.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        resetLowerSelections(6);

        if (selectedCelebs[4] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[4] = null;
            celebSelection6.classList.add('hidden');
        } else {
            if (selectedCelebs[4] !== null) {
                celebs5[selectedCelebs[4]].classList.remove('selected');
            }
            selectedCelebs[4] = index;
            celeb.classList.add('selected');
            celebSelection6.classList.remove('hidden');
            updateCelebs(6, selectedCelebs[4]);
        }
        updateOutput();
    });
});

celebs6.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        if (selectedCelebs[5] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[5] = null;
        } else {
            if (selectedCelebs[5] !== null) {
                celebs6[selectedCelebs[5]].classList.remove('selected');
            }
            selectedCelebs[5] = index;
            celeb.classList.add('selected');
        }
        updateOutput();
    });
});

function updateCelebs(row, selectedIndex) {
    const celebs = row === 2 ? celebs2 : row === 3 ? celebs3 : row === 4 ? celebs4 : row === 5 ? celebs5 : celebs6;
    celebs.forEach((el, idx) => {
        el.classList.toggle('disabled', !((selectedIndex === 0 && idx <= 1) || 
                                          (selectedIndex === 1 && idx <= 2) || 
                                          (selectedIndex === 2 && idx >= 1 && idx <= 3) || 
                                          (selectedIndex === 3 && idx >= 2 && idx <= 4) ||
                                          (selectedIndex === 4 && idx >= 3)));
    });
}

function resetLowerSelections(startRow) {
    for (let row = startRow; row <= 6; row++) {
        resetCelebs(row);
        if (row === 2) celebSelection2.classList.add('hidden');
        if (row === 3) celebSelection3.classList.add('hidden');
        if (row === 4) celebSelection4.classList.add('hidden');
        if (row === 5) celebSelection5.classList.add('hidden');
        if (row === 6) celebSelection6.classList.add('hidden');
    }
    updateOutput();
}

function resetCelebs(row) {
    const celebs = row === 2 ? celebs2 : row === 3 ? celebs3 : row === 4 ? celebs4 : row === 5 ? celebs5 : celebs6;
    celebs.forEach((el) => {
        el.classList.remove('selected');
        el.classList.remove('disabled');
    });
    selectedCelebs[row - 1] = null;
}

function updateOutput() {
    const selectedNames = selectedCelebs.map((index, row) => {
        if (index !== null) {
            return row === 0 ? celebs1[index].getAttribute('data-name') :
                   row === 1 ? celebs2[index].getAttribute('data-name') :
                   row === 2 ? celebs3[index].getAttribute('data-name') :
                   row === 3 ? celebs4[index].getAttribute('data-name') :
                   row === 4 ? celebs5[index].getAttribute('data-name') :
                               celebs6[index].getAttribute('data-name');
        }
        return '';
    }).filter(name => name !== '').join(', ');

    output.value = 'My path: ' + selectedNames.join(', ');
}

document.getElementById('copyButton').addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
});

document.getElementById("gamehub-btn").addEventListener("click", function() {
    window.location.href = "gamehub.html";
  });
  
document.getElementById("suggestions-btn").addEventListener("click", function() {
    window.location.href = "suggestions.html";
  });