app.controller('mailsController', ['$scope', 'mailService', '$mdToast', function ($scope, mailService, $mdToast) {
	$scope.mail = {}

	$scope.sendMail = function () {
		mailService.sendMail($scope.mail, (err, result) => {
			if (err) {
				console.log('Failure', err);
				let options = {
					template: `
					<md-toast>
						<div class="md-toast-content">
							Thank you for the email ${err.name}!
						</div>
					</md-toast>
					`,
					hideDelay: 4000,
					position:'bottom right',
					toastClass: 'md-primary'
				}
				$mdToast.show(options).then(() => console.log('pop goes the toast')).catch((err) => console.log('uh oh', err))

			} else {
				console.log('Success!', result);
				$scope.err = {}
				$mdToast.show($mdToast.successfulEmail(result.name))

			}
		})
	}
}])
