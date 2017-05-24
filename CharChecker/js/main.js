(function() {
	'use strict';

	var comment = document.getElementById('comment');
	var label = document.getElementById('label');

	var LIMIT = 40;
	var WARNING = 10;

	label.innerHTML = LIMIT;

	comment.addEventListener('keyup', function() {
		var remaining = LIMIT - this.value.length;
		label.innerHTML = remaining;
		
		// if文を使う場合
		// if (remaining < WARNING) {
		// 	label.className = 'warning';
		// } else {
		// 	label.className = '';
		// }

		// 三項演算子を使う場合
		label.className = remaining < WARNING ? 'warning' : '';
	});

})();