// ui.js

// テキスト変換
export function roleToText(role){
	switch(role){
		case 0: return "未参加";
		case 1: return "市民";
		case 2: return "人狼";
		case 3: return "占い師";
		case 4: return "狂人";
		default: return "未定義";
	}
}

export function aliveToText(alive){
	return alive ? "生存" : "死亡";
}

export function isDoneToText(isDone){
	return isDone ? "行動済み" : "未行動";
}

export function timeToText(date){
	return date ? "昼" : "夜";
}

export function winnerToText(winner){
	switch(winner){
		case 0: return "試合中";
		case 1: return "市民陣営";
		case 2: return "人狼陣営";
		default: return "未定義";
	}
}

// テキストセット
export function setStatus(text){
	const el = document.getElementById('status');
	el.innerText = text;
}

export function setUserName(name){
	document.getElementById('userName').value = name;
}

export function setNameDisplay(name){
	document.getElementById('name-display').innerText = name;
}

export function setRole(role){
	document.getElementById('role-display').innerText =
		roleToText(role);
}

export function viewAllPlayers(players){
	const playersArray = Object.entries(players)
		.sort((a, b) => {
			const PlayerA = a[1];
			const PlayerB = b[1];
			return (PlayerB.alive - PlayerA.alive);
		});
	const el = document.getElementById('player-list');
	el.innerHTML = "";
	for(const [name, player] of playersArray){
		//el.innerHTML += `<div>${name}</div>`;
		el.innerHTML += `<div>${name}: ${roleToText(player.role)}, ${aliveToText(player.alive)}, ${isDoneToText(player.isDone)}</div>`;
	}
}

export function viewAlivePlayers(players){
	const el = document.getElementById('alive-list');
	el.innerHTML = "";
	for(const name in players){
		const player = players[name];
	//el.innerHTML += `<div>${name}: ${roleToText(player.role)}</div>`;
	}
}

export function setPlayerCount(count){
	document.getElementById('player-count').innerText = count;
}

export function setAliveCount(count){
	document.getElementById('alive-count').innerText = count;
}

export function citizenCount(playerCount){
	const inputs = document.querySelectorAll('.value');

	let total = 0;
	inputs.forEach(input => {
		total += Number(input.value);
	});

	return playerCount - total;
}

export function updateCitizenDisplay(playerCount){
	const count = citizenCount(playerCount);
	document.getElementById('citizen-count').innerText = count;
}

export function setupRoleInputs(playerCount){
	const inputs = document.querySelectorAll('.value');

	inputs.forEach(input => {
		input.addEventListener('input', () => {
			updateCitizenDisplay(playerCount);
		});
	});
}

//投票先表示
export function viewVoteList(players, onVote){
	const el = document.getElementById('vote-list');
	el.innerHTML = "<h3>投票先一覧</h3>";
	if(!el) return;

	myname = document.getElementById('name-display').innerText;

	for(const name in players){
		if(name === myname) continue;
		if(!players[name].alive) continue;

		const div = document.createElement("div");

		div.innerHTML = `
			${name}
			<button>投票</button>
		`;

		div.querySelector("button").addEventListener("click", ()=>{
			onVote(name);
		});

		el.appendChild(div);
	}
}

// 入力受付
export function getUserName(){
	return document.getElementById('userName').value;
}

// ボタンクリック受付
export function onJoinClick(callback){
	document.getElementById('btn-join').addEventListener('click', callback);
}

export function onAssignClick(callback){
	document.getElementById('btn-assign').addEventListener('click', callback);
}

export function onNextClick(callback){
	document.getElementById('btn-next').addEventListener('click', callback);
}

export function AllgetClick(callback){
    document.getElementById('btn-allget').addEventListener('click', callback);
}

export function onAllDeleteClick(callback){
	document.getElementById('btn-alldelete').addEventListener('click', callback);
}




