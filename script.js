const words = {
  'compound'      : 'a whole formed by a union of two or more elements or parts',
  'steep'         : 'having a sharp inclination',
  'voracious'     : 'devouring or craving food in great quantities',
  'matron'        : 'a married woman who is staid and dignified',
  'abound'        : 'exist in large quantities',
  'tinge'         : 'color lightly',
  // Add more key-value pairs here
};

let currentCardIndex = 0;
const wordKeys = Object.keys(words);

function showNextCard() {
  const flashcard = document.getElementById('flashcard');
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  
  if (currentCardIndex >= wordKeys.length) {
    flashcard.style.display = 'none';
    return;
  }
  
  cardFront.style.display = 'block';
  cardBack.classList.remove('show');
  
  const currentWord = wordKeys[currentCardIndex];
  document.getElementById('word').textContent = currentWord;
  document.getElementById('definition').textContent = words[currentWord];
}

function showAnswer() {
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  
  cardFront.style.display = 'none';
  cardBack.classList.add('show');
}

function prevCard() {
  currentCardIndex = currentCardIndex === 0 ? wordKeys.length - 1 : currentCardIndex - 1;
  showNextCard();
}

function nextCard() {
  currentCardIndex = currentCardIndex === wordKeys.length - 1 ? 0 : currentCardIndex + 1;
  showNextCard();
}

showNextCard();