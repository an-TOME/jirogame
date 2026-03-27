import * as ui from "./ui.js";
import * as game from "./game.js";
import * as repo from "./firebaseOpe.js";

// 接続状態
repo.watchConnection((connected)=>{
	if(connected){
		ui.setStatus("✅ Firebaseに接続しました！", "green");
	}else{
		ui.setStatus("❌ 接続待ち...");
	}
});

// 参加ボタン
ui.onJoinClick(()=>{
	const name = ui.getUserName();
	if(!name){
		alert("名前を入力してね");
		return;
	}

	localStorage.setItem('wolf_my_name', name);

	game.joinGame(name).then(()=>{
		alert(name + "さん、参加完了！");
		game.watchRole(name, (role)=>{
			ui.setRole(role);
		});
	});
});

// 役職配布
ui.onAssignClick(()=>{
	game.assignRoles();
});

// 名前復元
const saved = localStorage.getItem('wolf_my_name');
if(saved){
	ui.setUserName(saved);
	game.watchRole(saved, (role)=>{
		ui.setRole(role);
	});
}
