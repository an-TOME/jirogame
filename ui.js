export function setStatus(text, color){
	const el = document.getElementById('status');
	el.innerText = text;
	if(color) el.style.color = color;
}

export function getUserName(){
	return document.getElementById('userName').value;
}

export function setUserName(name){
	document.getElementById('userName').value = name;
}

export function setRole(role){
	document.getElementById('role-display').innerText =
		"あなたの役職: " + (role || "待機中...");
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