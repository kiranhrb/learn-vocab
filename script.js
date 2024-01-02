const words = {
  ' Voracious '     : 'devouring or craving food in great quantities',
  ' Aatron '        : 'a married woman who is staid and dignified',
  ' Abound '        : 'exist in large quantities',
  ' Misanthrope  '	:	' a person who dislike humanity and avoids human society',
  ' Modest '	:	' unassuming or moderate',
  ' Morose '	:	' sullen',
  ' Munificent '	:	' unexpectedly generous',
  ' Nadir '	:	' lowest point',
  ' Nonplussed '	:	' totally perplexed!',
  ' Obdurate '	:	' stubbornly refusing to change one’s opinion',
  ' Oblique '	:	' neither parallel or at a right angle',
  ' Opaque '	:	' not able to be seen through',
  ' Overwrought '	:	' anxiety',
  ' Paucity '	:	' the presence of something in small quantities',
  ' Pernicious '	:	' causing subtle harm',
  ' Philistine '	:	' lacking culture and/or hostile to the arts',
  ' Placate '	:	' make less angry',
  ' Platitude '	:	' statement with moral content',
  ' Plethora '	:	' excessive amount of something',
  ' Posit '	:	' assume as fact',
  ' Prodigal '	:	' spending resources wastefully',
  ' Prophetic '	:	' accurately describing the future',
  ' Prosaic '	:	' dull, commonplace',
  ' Puerile '	:	' infantile',
  ' Purist '	:	' someone who insists on following the letter of the law',
  ' Pyre '	:	' pile of combustible material',
  ' Quixotic '	:	' idealistic, unrealistic',
  ' Quotidian '	:	' everyday, unremarkable',
  ' Reticence '	:	' not revealing one’s thoughts',
  ' Restive '	:	' restless, uneasy',
  ' Rue '	:	' bitterly regret',
  ' Ruminate '	:	' think deeply',
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