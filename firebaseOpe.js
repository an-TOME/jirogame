import { db } from "./firebase.js";
import { ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export function watchConnection(callback){
	onValue(ref(db, '.info/connected'), (snap)=>{
		callback(snap.val());
	});
}

export function addPlayer(name){
	return set(ref(db, 'players/' + name), {
		role: "待機中...",
		alive: true
	});
}

export function watchPlayersOnce(callback){
	onValue(ref(db, 'players'), (snapshot)=>{
		callback(snapshot.val());
	}, { onlyOnce: true });
}

export function updateRole(name, role){
	return update(ref(db, 'players/' + name), {
		role: role
	});
}

export function watchMyRole(name, callback){
	onValue(ref(db, 'players/' + name + '/role'), (snapshot)=>{
		callback(snapshot.val());
	});
}