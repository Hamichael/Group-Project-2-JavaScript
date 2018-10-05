Initial function prompts user to select num. of Minutes<br/>
Create 2 functions based on user selection:<br/>
	Function one counts from 0 up to num. of minutes selected<br/>
	Function two counts from minutes selected down to 0<br/>
Last function stop either function one or two when commanded<br/>
<br/>
Psuedo Code<br/>
<br/>
Function Set: <br/>
After prompting for minutes, update field.<br/>
Disabled if timer is counting up/down. Enabled if stopped.<br/>
<br/>
Function Count Up: <br/>
Set timer to 0:00 and increments 1 second using setInterval(function, milliseconds).<br/>
Disables Set. Stops Count Down.<br/>
Use the following resource for help.<br/>
https://www.w3schools.com/js/js_timing.asp<br/>
<br/>
Function Count Down:<br/>
Decrements 1 second using setInterval(function, milliseconds). Runs Stop when it hits 0:00.<br/>
Disables Set. Stops Count Up.<br/>
<br/>
Function Stop (button, boolean to pass to incrementing):<br/>
Stops Count Up/Down. Enables Set.<br/>
