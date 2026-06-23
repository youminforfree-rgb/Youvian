const params = new URLSearchParams(window.location.search);

const playerName = params.get("name");

const players = {

"Cristiano Ronaldo":{
team:"Al Nassr",
position:"ST",
value:"€12M"
},

"Lionel Messi":{
team:"Inter Miami",
position:"RW",
value:"€18M"
},

"Erling Haaland":{
team:"Manchester City",
position:"ST",
value:"€180M"
},

"Kylian Mbappe":{
team:"Real Madrid",
position:"ST",
value:"€180M"
},

"Jude Bellingham":{
team:"Real Madrid",
position:"CM",
value:"€180M"
},

"Vinicius Jr":{
team:"Real Madrid",
position:"LW",
value:"€170M"
}

};

const player = players[playerName];

document.getElementById("player-name").textContent = playerName;
document.getElementById("player-team").textContent =
"팀 : " + player.team;

document.getElementById("player-position").textContent =
"포지션 : " + player.position;

document.getElementById("player-value").textContent =
"시장가치 : " + player.value;