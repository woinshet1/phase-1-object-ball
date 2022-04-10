function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
}
  
const game = gameObject();
const teamCollection = Object.values(game);



const playersObject = () => {
    return { ...game.home.players, ...game.away.players };
}
const players = playersObject();



const numPointsScored = (name) => players[name] ? players[name].points : console.log("Player Not Found");


const shoeSize = (name) => players[name].shoe;

// Step 4: Take a given team input and return an array of that team's colors
const teamColors = (teamName) => game.home.teamName == teamName ? game.home.colors : game.away.teamName == teamName ? game.away.colors : console.log("Team not found");


const teamNames = () => [game.home.teamName, game.away.teamName];


const playerNumbers = (teamName) => {
    let team = teamCollection.find((team) => team.teamName === teamName);
    return Object.values(team.players).map((player) => player.number);
}


const playerNumber = (playerName) => players[playerName] ? players[playerName].number : console.log("No player found with this name");


const playerStats = (name) => players[name];


// This will return the number of rebounds associated with the player that has the largest shoe size
const bigShoeRebounds = () => {
    let playersCollection = Object.values(players);

    let maxShoeSize = 0;
    let maxShoeRebounds = 0;

    for (const player of playersCollection) {
        if (player.shoe > maxShoeSize) {
          maxShoeSize = player.shoe;
          maxShoeRebounds = player.rebounds;
        }
    }

    return maxShoeRebounds;
    debugger
}

const mostPointsScored = () => {
    let maxPointsScored = 0;
    let maxPointsPlayer = "";

    for (const player in players) {
        if (players[player].points > maxPointsScored) {
          maxPointsScored = players[player].points;
          maxPointsPlayer = player;
        }
    }
    return maxPointsPlayer;
}


const tallyPoints = (teamLocation) => {
    let team = game[teamLocation];
    let tallyPoint = 0;

    for (const player in team.players) {
        tallyPoint += team.players[player].points;
    }
    return tallyPoint;
}


const winningTeam = () => {
    return tallyPoints("home") > tallyPoints("away")
        ? game.home.teamName
        : game.away.teamName;
}


const playerWithLongestName = () => {
    let maxNameLength = 0;
    let playerWithLongestName = "";

    for (const player in playersObject()) {
        let longestPlayerNameLength = player.replace(/\s/g, "").length;
        if (longestPlayerNameLength > maxNameLength) {
          maxNameLength = longestPlayerNameLength;
          playerWithLongestName = player;
        }
    }
    return playerWithLongestName;
}

const doesLongNameStealATon = () => {
    let playerName = playerWithLongestName();
    let mostSteals = 0;
    let playerRecords = playersObject();

    for (const player in playerRecords) {
        if (playerRecords[player].steals > mostSteals) {
          mostSteals = playerRecords[player].steals;
        }
    }
    return mostSteals === playerStats(playerName).steals;
}

debugger