
function initialize(){
	window.keybox = document.getElementById("keybox");
	//window.keys = ['a','b','c'];
	window.keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "i", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	window.keySpeeds = {"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "i":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
	window.randomKey = 'nAn'
	window.lastTime=0;
}
function handle_keydown(e){
	if(e.key == "Enter"){
		console.log("starting");
		randomKey = keys[Math.floor(Math.random() * keys.length)];
		keybox.innerHTML=randomKey;
		window.lastTime=(new Date()).getTime()
	}
	if(randomKey === e.key ){
		time=(new Date()).getTime();
		interval = time-lastTime;
		lastTime=time;
		console.log(e.key, interval);
		randomKey = keys[Math.floor(Math.random() * keys.length)];
		keybox.innerHTML=randomKey;
	}
}

window.onkeydown = handle_keydown;
window.onload = function(){
	initialize();
};
