game = {
    deck: [
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
        hand: [],
        points: 0,
        roundsWon: 0,
    },
    computer: {
        name: "Gary",
        hand: [],
        points: 0,
        roundsWon: 0,
    },

     
    dealACard(player){
        console.log(`Dealing to ${player.name}`)
        let randomCard = Math.floor(Math.random() * this.deck.length);
        let cardDealt = this.deck.splice(randomCard, 1)[0];
        player.hand.push(cardDealt);
        // $('#player-hand').append(`<p>${player.hand[i]}</p>`)

        // $('#player-hand').append(`<p>Player has ${this.player.hand[i].name}`)

            
    },

    round () {
       
        for(let i = 0; i < 3; i++){
            this.dealACard(game.player);
            this.dealACard(game.computer);
        }
        $('#player-hand').append(`<p>${this.player.hand[0].name}</p>`)
        $('#player-hand').append(`<p>${this.player.hand[1].name}</p>`)
        $('#player-hand').append(`<p>${this.player.hand[2].name}</p>`)

    },

   


    battle () {
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        $('#player-hand').append(`<p>Player played ${playerCard.name}`)
        $('#computer-hand').append(`<p>Computer played ${computerCard.name}`)


        console.log(`${this.computer.name} played ${computerCard.name} which deals ${computerCard.damage} pts`);
        if(playerCard.damage > computerCard.damage){
            this.player.points ++
            console.log(`${this.player.name} won this battle`);
        } else if(playerCard.damage === computerCard.damage){
            console.log("Tie Game");
        } else {
            this.computer.points ++
            console.log(`${this.computer.name} won this battle`);
        }

        this.roundsWon();
    },
    roundsWon() {
            console.log(`Score: ${this.player.name}: ${this.player.points}, ${this.computer.name}: ${this.computer.points}`);
    },
}

const playRound = () => {
    console.log('working')


    game.round();
    game.battle();

    $('#score').append(`Score: ${game.player.name}: ${game.player.points}, ${game.computer.name}: ${game.computer.points}`)

}
$('.start-game').on('click', () => {
    $('.start-game').remove()
   
      playRound();
      $('#game-display').append('<button id= new-round>Start Next Round</button>')
      $('#new-round').click(playRound)
      
    })
    
       
    
  



$('#new-round').click(playRound);

// $('#new-round').on('click', () => {
//             $('#hands').remove()
//             $('#new-round').remove()

//         game.round();
//         game.battle();
//         $('#hands').append(`<p>${this.player.hand[0].name}</p>`)
//         $('#hands').append(`<p>${this.player.hand[1].name}</p>`)
//         $('#hands').append(`<p>${this.player.hand[2].name}</p>`)

//         $('#hands').append(`<p>Player played ${playerCard.name}`)
//         $('#hands').append(`<p>Computer played ${computerCard.name}`)

//         $('#score').append(`Score: ${game.player.name}: ${game.player.points}, ${game.computer.name}: ${game.computer.points}`)
//         $('#game-display').append('<button id= new-round>Start Next Round</button>')
//         })








