import * as firebase from "./firebase.js";

export const ROLE = {
	NONE : 0,		// 未参加
	CITIZEN : 1,	// 村人
	WOLF : 2,		// 人狼
	SEER : 3,		// 占い師
	MADMAN : 4		// 狂人
};
export function joinGame(name){
	return firebase.addPlayer(name);
}

export function assignRoles(){
	const roles = [
		ROLE.CITIZEN,
		ROLE.WOLF,
		ROLE.SEER,
		ROLE.MADMAN
	];

	firebase.watchPlayersOnce((players)=>{
		if(!players) {
			alert("参加者がいません");
			return;
		}

		const names = Object.keys(players);

		names.forEach((name, i)=>{
			firebase.updateRole(name, roles[i % roles.length]);
		});

		alert("役職を配りました！");
	});
}

export function watchRole(name, callback){
	firebase.watchMyRole(name, callback);
}

