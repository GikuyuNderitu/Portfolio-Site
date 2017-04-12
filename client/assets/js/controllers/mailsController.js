app.controller('mailsController', ['$scope', 'mailService', function ($scope, mailService) {
	$scope.mail = {}

	$scope.sendMail = function () {
		mailService.sendMail($scope.mail, (err, result) => {
			if (err) {
				console.log('Failure', err);
			} else {
				console.log('Success!', result);
			}
		})
	}
}])
