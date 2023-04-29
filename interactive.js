const situationsContainer = document.getElementById('situations');
const situationsContainer2 = document.getElementById('situations2');

situationsContainer.addEventListener('click', function(event) {
  const clickedImage = event.target;
  const situationNumber = clickedImage.getAttribute('data-situation');
  if (situationNumber) {
    situationsContainer.classList.add('hidden');
    situationsContainer2.classList.remove('hidden');
  }
});

situationsContainer2.addEventListener('click', function(event) {
  const clickedImage = event.target;
  const situationNumber = clickedImage.getAttribute('data-situation');
  if (situationNumber) {
    // handle clicks on situations in the second container
  }
});
