class Card {
    constructor (suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor () {
        this.deckOfCards = [];
        this.createHand();
    }

    createHand() {
        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        let ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                    this.deckOfCards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
}

let newDeck = new Deck();
console.log(newDeck);

class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0
    }
}


class StartGame {
    constructor(deck, players) {
        this.deck = deck;
        this.players = players;
    }

    shuffleCards() {
        for (i = this.deck.deckOfCards.length - 1; i > 0; i--){
            let z = Math.floor(Math.random() * i);
            let temp = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[i];
            this.deck.deckOfCards[z] =temp;
        }
    }

    dealCards() {
        let list = this.deck.deckOfCards;
        let half = Math.ceil(list.length / 2);

    }     
    
    displayWinner(score) {
        if (score[0] > score[1]) {
            
     } 

    compareCards() {
        let player1Score = 0;
        let player2Score = 0;
        let playersScore = [];

    for (let i = 0; i < this.players[0].hand.length; i++) {
        
        }

    }
    playersScore.push(player1Score, player2Score) 
        return playersScore;
}
        
    
}

let fullDeck = new Deck();
let player1 = new Player("Happy");
let player2 = new Player("Ruby");
let score 

console.log(player1);
console.log(player2);

const 

game.shuffleCards();
game.dealCards();
score = game.compareCards();
game.displayWinner(score);