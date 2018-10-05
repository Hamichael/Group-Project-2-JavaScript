Initial function prompts user to select num. of Minutes
Create 2 functions based on user selection:
	Function one counts from 0 up to num. of minutes selected
	Function two counts from minutes selected down to 0
Last function stop either function one or two when commanded

Psuedo Code

Function Set: 
After prompting for minutes, update field.
Disabled if timer is counting up/down. Enabled if stopped.

Function Count Up: 
Set timer to 0:00 and increments 1 second using setInterval(function, milliseconds).
Disables Set. Stops Count Down.
Use the following resource for help.
https://www.w3schools.com/js/js_timing.asp

Function Count Down:
Decrements 1 second using setInterval(function, milliseconds). Runs Stop when it hits 0:00.
Disables Set. Stops Count Up.

Function Stop (button, boolean to pass to incrementing):
Stops Count Up/Down. Enables Set.