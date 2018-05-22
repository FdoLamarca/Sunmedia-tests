<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>

'use strict';
var promise = new Promise(function(resolve, reject) {
	setTimeout(function () {
		if (Math.round(Math.random()) === 1) {
			resolve("Success!");
		} else {
			reject("Fail!");
		}
	}, 1000);
});

promise
	.then(function(successMessage) {
		console.log("Yes! " + successMessage);
	})
	.catch(function(failMessage) {
		console.log("No! " + failMessage);
	});