//Display is textbox.
function set(display) {
	let seconds = "00";
	let minutes = prompt("Please set time between 1 to 30 minutes: ");
	if (minutes === null) {return;}//Returns on Cancel
	while (minutes > 30 || minutes < 1) {
		minutes = prompt("Invalid quantity. Please select a time between 1 and 30 minutes: ");
		if (minutes === null) {return;}//Returns on Cancel
	}
	
	// Formatting
	minutes = minutes < 10 ? "0" + minutes : minutes;
	
	display.value = minutes + ":" +seconds;
}

//Duration is timer listed.
//Display is textbox.
//setButton refers to the button to be disabled.
//Clock refers to the current clock variable in use.
function countUp(duration, display, setButton, clock) {
	//Zero check
	if (duration <= 0) {
		return;
	}
	
	setButton.disabled = true; 
	clearInterval(clock.clock);
	
	//Get duration, use it as a stop point
	length = duration;
	//console.log(length);
	
	let timer = 0, minutes, seconds;
	display.value = "00:00";
    
    clock.clock = setInterval(function () {

		timer++;
		// Converting Time
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);
		
		// Formatting
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.value = minutes + ":" + seconds;
		
		//console.log(minutes + ":" + seconds);
		//console.log(timer);
		//console.log(clock);
		
		//Stop timer after the number set
		if (timer >= length) {
			stop(setButton, clock);
		}
		
    }, 1000);
}

//Duration is timer listed.
//Display is textbox.
//setButton refers to the button to be disabled.
//Clock refers to the current clock variable in use.
function countDown(duration, display, setButton, clock) {
	//Zero check
	if (duration <= 0) {
		return;
	}
	
	setButton.disabled = true;
	clearInterval(clock.clock);
	
    let timer = duration, minutes, seconds;
	
    clock.clock = setInterval(function () {

		timer--;
		// Converting Time
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		// Formatting
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.value = minutes + ":" + seconds;
		
		//console.log(minutes + ":" + seconds);
		//console.log(timer);
		//console.log(clock);
		
		//Stop timer when it hits 0
		if (timer <= 0) {
			stop(setButton, clock);
		}
		
    }, 1000);
}

//setButton refers to the button to be enabled.
//Clock refers to the clock variable to be disabled.
function stop(setButton, clock) {
	//console.log(clock.clock);
	setButton.disabled = false; 
	clearInterval(clock.clock);
}

//Function to convert text clock format into seconds
function convertSecs(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}