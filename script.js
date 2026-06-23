const players = [
{
name:"Cristiano Ronaldo",
team:"Al Nassr",
position:"ST",
value:12
},

{
name:"Lionel Messi",
team:"Inter Miami",
position:"RW",
value:18
},

{
name:"Erling Haaland",
team:"Manchester City",
position:"ST",
value:180
},

{
name:"Kylian Mbappe",
team:"Real Madrid",
position:"ST",
value:180
},

{
name:"Jude Bellingham",
team:"Real Madrid",
position:"CM",
value:180
},

{
name:"Vinicius Jr",
team:"Real Madrid",
position:"LW",
value:170
}
];

// 선수 정보
const playerList = document.getElementById("player-list");

players.forEach(player => {

playerList.innerHTML += `
<div class="player-card">

<h3>${player.name}</h3>

<p>팀 : ${player.team}</p>

<p>포지션 : ${player.position}</p>

<p>시장가치 : €${player.value}M</p>

</div>
`;

});

// 선수 검색
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", ()=>{

const input =
document.getElementById("searchInput")
.value
.toLowerCase();

const result = players.find(player =>
player.name.toLowerCase().includes(input)
);

const searchResult =
document.getElementById("searchResult");

if(result){

searchResult.innerHTML = `

<div class="player-card">

<h3>${result.name}</h3>

<p>팀 : ${result.team}</p>

<p>포지션 : ${result.position}</p>

<p>시장가치 : €${result.value}M</p>

</div>

`;

}

else{

searchResult.innerHTML =
"<p>선수를 찾을 수 없습니다.</p>";

}

});

// 시장가치 TOP10
const topValue =
document.getElementById("top-value");

const sortedPlayers =
[...players].sort((a,b)=>b.value-a.value);

sortedPlayers.forEach(player=>{

topValue.innerHTML += `

<div class="player-card">

<h3>${player.name}</h3>

<p>팀 : ${player.team}</p>

<p>시장가치 : €${player.value}M</p>

</div>

`;

});

// 뉴스
const news = [

{
title:"맨체스터 시티, 새로운 공격수 영입 추진",
date:"2026-06-22"
},

{
title:"레알 마드리드, 음바페 활약에 만족",
date:"2026-06-22"
},

{
title:"리버풀, 다음 시즌 전력 강화 계획 발표",
date:"2026-06-21"
},

{
title:"바르셀로나, 유망주 계약 연장 검토",
date:"2026-06-21"
}

];

const newsList =
document.getElementById("news-list");

news.forEach(article=>{

newsList.innerHTML += `

<div class="news-card">

<h3>${article.title}</h3>

<p>${article.date}</p>

</div>

`;

});

// 다크모드
const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

// 경기 일정
const matchesDiv =
document.getElementById("matches");

matchesDiv.innerHTML = `

<div class="news-card">
<h3>Manchester City</h3>
<p>VS</p>
<h3>Liverpool</h3>
<p>2026-06-25</p>
</div>

<div class="news-card">
<h3>Real Madrid</h3>
<p>VS</p>
<h3>Barcelona</h3>
<p>2026-06-26</p>
</div>

`;

// EPL 순위
const standingsDiv =
document.getElementById("standings");

standingsDiv.innerHTML = `

<div class="news-card">
<h3>1. Liverpool</h3>
</div>

<div class="news-card">
<h3>2. Arsenal</h3>
</div>

<div class="news-card">
<h3>3. Manchester City</h3>
</div>

<div class="news-card">
<h3>4. Chelsea</h3>
</div>

`;