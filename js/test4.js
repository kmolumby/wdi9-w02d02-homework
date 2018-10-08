game = {
    deck:
[
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

    player: {
        name: "Ash",
        hand:[],
        points: 0,
        roundsWon: 0
    },
    computer: {
        name: "Gary",
        hand: [],
        points: 0,
        roundsWon: 0
    },
    dealCard(player) {
        console.log(`Deal card to ${player.name}`)
        let randomIndex = Math.floor(Math.random()*this.deck.length); //know what cards have been played
        let cardToDeal = game.deck.splice(randomIndex, 1)[0]; //accessing the thing in the array that splice is putting it into our hand shouldn't be spliced with smaller arrays splice returns an array
        console.log(cardToDeal);
        console.log(player.hand);
        player.hand.push(cardToDeal);
       
    },


    startGame () {
        //console.log("The game is beginning");
        for (let i = 0; i < 3; i++) {
            this.dealCard(game.player);
            this.dealCard(game.computer);
        }
        this.battle();
    },


    battle () {
      for (let i = 0; i <= 3; i++) {
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        if(playerCard.damage > computerCard.damage){
            this.player.points++
            console.log("Ash won this battle")
        } else if(playerCard.damage === computerCard.damage){
            console.log("tie");
        } else {
            this.computer.points++
            console.log("Gary won");
        }
        console.log(this.computer.points);
        console.log(this.player.points);
      }
    }
    };

    // rounds () {
    //     for (let i = 0; i < 3; i++) {
    //         battle();
    //         this.player.points++
    //             console.log(this.player.points);
    //     }
    // }


//comparing the scores
  //deal a card
  //start the game which will deal a hand to player and computer
//game object should have all of our stuff in it

game.startGame();
