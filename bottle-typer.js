
function initialize(){
	window.keybox = document.getElementById("keybox");
	//window.keys = ['a','b','c'];
	//window.keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "i", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	window.keys = ["est","ing","and","ion"];
	window.keySpeeds = {"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "i":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0};
	window.randomKey = 'nAn'
	window.lastTime=0;
	window.keybuf=""
}
function handle_keydown(e){
	keybuf+=e.key;
	keybox.innerHTML+=e.key;
	console.log(randomKey,keybuf);
	if(e.key == "Enter"){
		console.log("starting");
		randomKey = keys[Math.floor(Math.random() * keys.length)];
		keybox.innerHTML=randomKey+"<br>";
		window.lastTime=(new Date()).getTime()
		keybuf = "";
	}else if(e.key == "Backspace"){
		e.preventDefault();// do not navigate browser back!
		keybuf=keybuf.substr(0,keybuf.length-10)
		keybox.innerHTML=keybox.innerHTML.substr(0,keybox.innerHTML.length-10)
	}
	if(randomKey === keybuf ){
		time=(new Date()).getTime();
		interval = time-lastTime;
		lastTime=time;

		console.log(keybuf, interval);

		while(randomKey === keybuf){
			randomKey = keys[Math.floor(Math.random() * keys.length)];
		}
		keybox.innerHTML=randomKey+"<br>";
		keybuf = "";
	}
}

window.onkeydown = handle_keydown;
window.onload = function(){
	initialize();
};
