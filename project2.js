var timeUP =setInterval(myTimer,1000);


function myTimer() {
	var d = new Date();
	document.getElementById("countUp").innerHTML=d.toLocaleTimeString();
	
	

}

