const team = {
    _players: [
      { firstName: "LeBron", lastName: "James", age: 39 },
  
      { firstName: "Anthony", lastName: "Davis", age: 33 },
  
      { firstName: "Austin", lastName: "Reeves", age: 26 },
    ],
    _games: [
      { opponent: "Clipps", teamPoints: 100, opponentPoints: 80 },
      { opponent: "Bucks", teamPoints: 120, opponentPoints: 85 },
      { opponent: "Kings", teamPoints: 90, opponentPoints: 102 },
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
  
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
  
      this.games.push(game)
    }
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  
  team.addGame('Titans', 60, 40)
  console.log(team.games);