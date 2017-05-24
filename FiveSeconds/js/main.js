(function() {
	'use strict';

	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var result = document.getElementById('result');
	var startTime;
	var isStarted = false;



	start.addEventListener('click', function() {
		if (isStarted === true) {
			return;
		}
		isStarted = true;
		startTime = Date.now();
		this.className = 'pushed';
		stop.className = '';
		result.className = 'standby';
		result.textContent = '0.000';
	});

	stop.addEventListener('click', function() {
		var elapsedTime;
		var diff;
		if (isStarted === false) {
			return;
		}
		isStarted = false;
		this.className = 'pushed';
		start.className = '';
		result.className = '';
		elapsedTime = (Date.now() - startTime) / 1000;
		// elapsedTime = 4;
		// result.textContent = elapsedTime;
		result.textContent = elapsedTime.toFixed(3);
		diff = elapsedTime - 5.0;
		// if (diff > -1.0 && diff < 1.0) {
		if (Math.abs(diff) < 0.5) {
			result.className = 'perfect';
		}

	});
})();