import * as repo from "./firebase.js";

export function joinGame(name){
	return repo.addPlayer(name);
}

export function assignRoles(){
	const roles = ["人狼", "占い師", "村人", "村人", "狂人"];

	repo.watchPlayersOnce((players)=>{
		if(!players) {
			alert("参加者がいません");
			return;
		}

		const names = Object.keys(players);

		names.forEach((name, i)=>{
			repo.updateRole(name, roles[i % roles.length]);
		});

		alert("役職を配りました！");
	});
}

export function watchRole(name, callback){
	repo.watchMyRole(name, callback);
}