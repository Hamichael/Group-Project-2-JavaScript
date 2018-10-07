let clock1;
let clock2;
let clock3;

function countUp(duration, display, clock) {
	clearInterval(this.clock);
	display.value = "00:00";
    let timer = duration, minutes, seconds;
    this.clock = setInterval(function () {
		timer++;
		
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.value = minutes + ":" + seconds;
		
		//console.log(minutes + ":" + seconds);
		//console.log(timer);
		
    }, 1000);
}

function countDown(duration, display, clock) {
	clearInterval(this.clock);
    let timer = duration, minutes, seconds;
    this.clock = setInterval(function () {
		timer--;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.value = minutes + ":" + seconds;
		
		//console.log(minutes + ":" + seconds);
		//console.log(timer);
		
		if (timer == 0) {
			clearInterval(this.clock);
		}
		
    }, 1000);
}

function stop(clock) {
	clearInterval(this.clock);
}

function convertSecs(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}