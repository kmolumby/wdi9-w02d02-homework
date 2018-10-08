const game = {
    
    deck:[
    {
        name: "Bulbasaur",
        damage: 60
    }, {
        name: "Caterpie",
        damage: 40
    }, {
        name: "Charmander",
        damage: 60
    }, {
        name: "Clefairy",
        damage: 50
    }, {
        name: "Jigglypuff",
        damage: 60
    }, {
        name: "Mankey",
        damage: 30
    }, {
        name: "Meowth",
        damage: 60
    }, {
        name: "Nidoran - female",
        damage: 60
    }, {
        name: "Nidoran - male",
        damage: 50
    }, {
        name: "Oddish",
        damage: 40
    }, {
        name: "Pidgey",
        damage: 50
    }, {
        name: "Pikachu",
        damage: 50
    }, {
        name: "Poliwag",
        damage: 50
    }, {
        name: "Psyduck",
        damage: 60
    }, {
        name: "Rattata",
        damage: 30
    }, {
        name: "Squirtle",
        damage: 60
    }, {
        name: "Vulpix",
        damage: 50
    }, {
        name: "Weedle", 
        damage: 40
    }
    ],

    cardsInPlay: [],
    computerPoints: 0,
    playerPoints: 0,
    currentRound: 1,
    playerRounds: 0,
    roundsWonByComputer: 0,
    computerHand: [],
    playerHand: [],

}

const dealRandomCard = () => {
    console.log('working')
    for (let i = 0; i< 3; i++) {
    let randomCard = Math.floor(Math.random()* game.deck.length);
    console.log(randomCard)
    // gn.playerCard = randomCard;
    // this.playerHand.push(this.playerCard);
    // let cardDealt = this.deck.splice(randomCard,1)[0];
    // this.computerHand.push(this.computerCard);

    // return cardDealt;
    }
}



//game play




// function that randomly deals card

// variable that holds the randomly dealt cards

// function that compares the card to computer cards

//function that holds the amount of points

// function that does the game play 3 times 

