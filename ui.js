export function setStatus(text){
	const el = document.getElementById('status');
	el.innerText = text;
}

export function getUserName(){
	return document.getElementById('userName').value;
}

export function setUserName(name){
	document.getElementById('userName').value = name;
}

export function setRole(role){
	document.getElementById('role-display').innerText =
		"あなたの役職: " + roleToText(role);
}

export function onJoinClick(callback){
	document.getElementById('btn-join').addEventListener('click', callback);
}

export function onAssignClick(callback){
	document.getElementById('btn-assign').addEventListener('click', callback);
}

export function AllgetClick(callback){
    document.getElementById('btn-allget').addEventListener('click', callback);
}

export function onAllDeleteClick(callback){
	document.getElementById('btn-alldelete').addEventListener('click', callback);
}

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

export function viewAllPlayers(players){
	const el = document.getElementById('player-list');
	el.innerHTML = "";
	for(const name in players){
		const player = players[name];
		el.innerHTML += `<div>${name}</div>`;
		//el.innerHTML += `<div>${name}: ${roleToText(player.role)}</div>`;
	}
}

export function viewAlivePlayers(players){
	const el = document.getElementById('alive-list');
	el.innerHTML = "";
	for(const name in players){
		const player = players[name];
		el.innerHTML += `<div>${name}: ${roleToText(player.role)}</div>`;
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

