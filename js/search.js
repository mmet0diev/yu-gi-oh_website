import {cards} from '../data/cards.js';

// collections.html functionality:
// Make an array instance of all cards in cards.js
const allCards = [...cards];

const searchBar = document.getElementById('search_bar');
const searchBtn = document.getElementById('search_btn');
// const cardsContent = document.getElementById('cards_content');

// Render the cards content/scroll view and return it
renderCards(allCards);

function createCardElement(card) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = card.name;
  cardTitle.style.color = 'red';
  cardDiv.appendChild(cardTitle);

  const cardType = document.createElement('p');
  cardType.classList.add('card-type');
  cardType.textContent = card.type;
  cardDiv.appendChild(cardType);

  const cardImg = document.createElement('img');
  cardImg.src = card.img;
  cardImg.alt = card.name;
  cardDiv.appendChild(cardImg);

  return cardDiv;
}

function renderCards(cards) {
  // If not empty, clear the cards container element
  const cardsContent = document.getElementById('cards_content');
  if (cardsContent) {
    cardsContent.innerHTML = '';

    cards.forEach((card) => {
      const cardElement = createCardElement(card);
      cardsContent.appendChild(cardElement);
    });
  }
}


// add event listeners to the search btn and search bar
if (searchBar) {
  // add event listeners to the search btn and search bar
  searchBtn?.addEventListener('click', performSearch);
  searchBar.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      performSearch(); // Call the performSearch() function
    }
  });
}

// Function for performing a search on the cards collection, filtering cards according to text inputed in the search bar
function performSearch() {
  const userInput = searchBar.value.toLowerCase();
  let filteredCards = [];

  allCards.forEach((card) => {
    if (
      card.name.toLowerCase().includes(userInput) ||
      card.type.toLowerCase().includes(userInput)
    ) {
      filteredCards.push(card);
    }
  });

  renderCards(filteredCards);
}
