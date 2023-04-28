import { cards } from '../data/cards.js';

// Make an instance of the cards array from cards.js
const allCards = [...cards];
const selectedCards = [];

const cardList = document.getElementById('card-list');
const selectedCardList = document.getElementById('selected-cards');

const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn')

// Display all available cards
for (const card of allCards) {
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    image.src = card.img;
    listItem.dataset.cardId = card.id; // add data-card-id attribute
    listItem.appendChild(image);
    listItem.draggable = true;
    listItem.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', card.name);
    });
    cardList.appendChild(listItem);
}

function dragOver(event) {
    console.log("Drag")
    event.preventDefault();
}

// Adds a card to the deck
function addCardToDeck(event) {
    console.log("Added card");
    event.preventDefault();
  
    if (selectedCards.length >= 50) {
      console.log("Deck is already full");
      return;
    }
  
    const cardName = event.dataTransfer.getData('text/plain');
    
    if (!selectedCards.includes(cardName)) {
      const cardIndex = allCards.findIndex((c) => c.name === cardName);
      if (cardIndex >= 0) {
        const card = allCards[cardIndex];
        selectedCards.push(cardName);
        const listItem = event.target.closest('li');
        const droppedCard = document.createElement('li');
        const image = document.createElement('img');
        image.src = card.img;
        // droppedCard.dataset.cardId = card.id;
        droppedCard.appendChild(image);
        selectedCardList.appendChild(droppedCard);
        if (listItem && cardList.contains(listItem)) {
          cardList.removeChild(listItem);
        }
      }
      updateDeckCount();
    } else {
      console.log("Card already in deck");
    }
  }

function updateDeckCount() {
    const countLabel = document.getElementById('deck-count');
    countLabel.textContent = `Cards in deck: ${selectedCards.length}`;
}

function clearDeck(){
    // clear the content of the selected-cards list
    selectedCardList.innerHTML = '';
    // empty the selectedCards array
    selectedCards.length = 0;
    // reset the count-label to 0
    updateDeckCount();
}

// Save the deck in a .txt file
function saveDeck() {
    if (selectedCards.length >= 40) {
      const deckName = 'deck.txt';
      const deckContent = 'Deck:\n' + selectedCards.join('\n') + '\n';
      const blob = new Blob([deckContent], {type: 'text/plain'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = deckName;
      link.click();
    } else {
      console.log('Deck has less than 40 cards, cannot save.');
    }
  }
    

// Event Listeners
cardList.addEventListener('dragover', dragOver);
selectedCardList.addEventListener('dragover', dragOver);
selectedCardList.addEventListener('drop', addCardToDeck);
clearBtn.addEventListener('click', clearDeck);
saveBtn.addEventListener('click', saveDeck);

