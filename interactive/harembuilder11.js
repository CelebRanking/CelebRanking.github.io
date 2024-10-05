const celebs1 = document.querySelectorAll('#celeb-selection .celeb');
const celebs2 = document.querySelectorAll('#celeb-selection-2 .celeb');
const celebs3 = document.querySelectorAll('#celeb-selection-3 .celeb');
const output = document.getElementById('output');
const celebSelection2 = document.getElementById('celeb-selection-2');
const celebSelection3 = document.getElementById('celeb-selection-3');

let selectedCelebs = [null, null, null];

// Disable the second and third rows initially
celebs2.forEach(celeb => celeb.classList.add('disabled'));
celebs3.forEach(celeb => celeb.classList.add('disabled'));

celebs1.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        // Reset selections in the second and third rows
        resetCelebs(2);
        resetCelebs(3);  
        celebSelection3.classList.add('hidden');
        output.value = ''; // Clear the output when a new selection is made

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
        
        updateOutput(); // Update the output text area after selections are reset
    });
});

celebs2.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        if (selectedCelebs[1] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[1] = null;
            resetCelebs(3);
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
        // Remove selection from third row if it was made already
        if (selectedCelebs[2] !== null) {
            celebs3[selectedCelebs[2]].classList.remove('selected');
            selectedCelebs[2] = null;
        }
        updateOutput();
    });
});

celebs3.forEach((celeb, index) => {
    celeb.addEventListener('click', () => {
        if (selectedCelebs[2] === index) {
            celeb.classList.remove('selected');
            selectedCelebs[2] = null;
        } else {
            if (selectedCelebs[2] !== null) {
                celebs3[selectedCelebs[2]].classList.remove('selected');
            }
            selectedCelebs[2] = index;
            celeb.classList.add('selected');
        }
        updateOutput();
    });
});

function updateCelebs(row, selectedIndex) {
    const celebs = row === 2 ? celebs2 : celebs3;
    celebs.forEach((el, idx) => {
        el.classList.toggle('disabled', !((selectedIndex === 0 && idx <= 1) || 
                                          (selectedIndex === 1 && idx <= 2) || 
                                          (selectedIndex === 2 && idx >= 1 && idx <= 3) || 
                                          (selectedIndex === 3 && idx >= 2 && idx <= 4) ||
                                          (selectedIndex === 4 && idx >= 3)));
    });
}

function resetCelebs(row) {
    const celebs = row === 2 ? celebs2 : celebs3;
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
                               celebs3[index].getAttribute('data-name');
        }
        return '';
    }).filter(name => name !== '').join(', ');

    output.value = selectedNames;
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