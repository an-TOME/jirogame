import { db } from "./firebaseset.js";
import { ref, set, onValue, update, get} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

export function watchConnection(callback){
	onValue(ref(db, '.info/connected'), (snap)=>{
		callback(snap.val());
	});
}

export function addPlayer(name){
	return set(ref(db, 'players/' + name), {
		role: 0,
		alive: true,
		score: 0
	});
}

export function watchPlayersOnce(callback){
	onValue(ref(db, 'players'), (snapshot)=>{
		callback(snapshot.val());
	}, { onlyOnce: true });
}

export function updateRole(name, inputrole){
	return update(ref(db, 'players/' + name), {
		role: inputrole
	});
}

export function watchMyRole(name, callback){
	onValue(ref(db, 'players/' + name + '/role'), (snapshot)=>{
		callback(snapshot.val());
	});
}

export async function getAllData(){
	const snap = await get(ref(db, "/"));
	return snap.val();
}

export async function deleteAllData(){
	await set(ref(db, "/"), null);
}

