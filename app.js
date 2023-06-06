const select = document.getElementById('select');
const timeDislp = document.getElementById('time');
const countDisply = document.getElementById('count');
const start = document.getElementById('start');
const panel = document.getElementById('panel');
const result = document.getElementById('result');
const replay = document.getElementById('replay');
const speed = document.getElementById('speed');
const setTimes = document.querySelectorAll('#select li');

let count = 0;
let isStart = false;
let time = 1;
let initialTime = 1;

replay.addEventListener('click', function(){
	result.style.display = "none";
	time = initialTime;
})

function setTimeHandler(e){
	setTimes.forEach(elem=>{
		elem.style.color = "#000";
		elem.style.background = "#fff";
	})
	e.target.style.color = "#fff";
	e.target.style.background = "#00f";
	time = Number(e.target.innerText.slice(0, -1))
	initialTime = Number(e.target.innerText.slice(0, -1));
	timeDislp.innerText = (time < 10)? "0"+time: time;
}

panel.addEventListener('click', function() {
	if (!isStart) {
		start.innerText = "Click me";
		isStart = true;
		startCounter()
	}
	if (isStart && time!=0){
		count++;
		countDisply.innerText = (count<10)? "0"+count : count;	
	}
});

function startCounter() {
	setInterval(function() {
		if (!isStart) return;
		if(time!=0){
			time--;
			timeDislp.innerText = (time<10)? "0" + time: time;
		}
		else{
			speed.innerText = Number(count)/Number(initialTime);
			isStart = false;
			result.style.display = "block";
			start.innerText = "Start";
			count = 0; 
		}
	}, 1000);
}