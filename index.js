class Card {
    constructor(suit, rank, value){
    this.suit = suit;
    this.rank = rank;
    this.value = value;
    }
  }
  
  class Deck() {
    constructor() {
      this.deckOfCards = [];
      this.createHand();
      }
      
        createHand() {
         const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
         let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
         let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  
         for (let i = 0; i < suits.length; i++) {
          for (let r = 0; r < ranks.length; r++) {
            this.deckOfCards.push(new Card(suits[i], ranks[r], values[r]));
          }
         }
        }
      }
  
      let newDeck = newDeck();
      console.log(newDeck)