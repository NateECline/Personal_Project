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

class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}
class StartGame {
    constructor(deck, players) {
        this.deck = deck;
        this.players = players;
    }

    shuffleCards() {
        for (let i = this.deck.deckOfCards.length - 1; i > 0; i--){
            let z = Math.floor(Math.random() * i);
            let temp = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[z];
            this.deck.deckOfCards[z] =temp;
        }
    }

    dealCards() {
        let list = this.deck.deckOfCards;
        let half = Math.ceil(list.length / 2);

            for(let i=26;i>0;i--){
            this.players[0].hand=list.pop()
            this.players[1].hand=list.pop()
            }
    }

    displayWinner(score) {
        if (score[0] > score[1]) {
            console.log('Player 1 wins!')
        } else{
            console.log('Player 2 wins!')
        }
    }
    compareCards(){
        let player1Score = 0
        let player2Score = 0
        let playersScore = []


        if(this.players[0].hand.value > this.players[1].hand.value){
            console.log(`Player 1 has greater value.
            Player 1: ${this.players[0].hand.suit} of ${this.players[0].hand.rank}
            Player 2: ${this.players[1].hand.suit} of ${this.players[1].hand.rank}

             `)
        } else if(this.players[0].hand.value < this.players[1].hand.value){
            console.log(`Player 2 has greater value.
            Player 1: ${this.players[0].hand.suit} of ${this.players[0].hand.rank}
            Player 2: ${this.players[1].hand.suit} of ${this.players[1].hand.rank}
            `)
        } else{
            console.log(`It is a tie. 
            Player 1: ${this.players[0].hand.suit} of ${this.players[0].hand.rank}
            Player 2: ${this.players[1].hand.suit} of ${this.players[1].hand.rank}`)
        }

        playersScore.push(player1Score, player2Score)

        return playersScore;
    }
}


let fullDeck = new Deck();
let player1 = new Player(`Das`);
let player2 = new Player(`Pownin`);
let score

console.log(player1);
console.log(player2);

let startGame=new StartGame(fullDeck,[player1, player2])

startGame.shuffleCards();
startGame.dealCards();
score = startGame.compareCards();
startGame.displayWinner(score);