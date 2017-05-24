(function() {
	'use strict';

	var btn = document.getElementById('btn');
	var result = document.getElementById('result');

	var results = ['小吉', '中吉', '大吉'];

	btn.addEventListener('click', function() {
		// var num = Math.floor(Math.random() * 3);
		// var num = Math.floor(Math.random() * results.length);
		var num = Math.random();

		// 確率を変える方法
		if (num < 0.01) {
			result.textContent = '大凶'; // 1%の確率で大凶
		} else if (num < 0.11) {
			result.textContent = '凶'; // 10%凶
		} else if (num < 0.61) {
			result.textContent = '吉'; // 50%吉
		} else {
			result.textContent = '大吉';
		}

		// switch文を使う
		// switch (num) {
		// 	case 0:
		// 		result.innerHTML = '大吉';
		// 		break;
		// 	case 1:
		// 		result.innerHTML = '中吉';
		// 		break;
		// 	case 2:
		// 		result.innerHTML = '小吉';
		// 		break;
		// }

		// 配列を使う方法
		// result.innerHTML = results[num];
	});

	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});

	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();