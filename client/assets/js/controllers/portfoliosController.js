app.controller('portfoliosController', ['$scope', 'portfolioFactory', '$mdSidenav', '$mdDialog', function($scope, portfolioFactory, $mdSidenav, $mdDialog){
	$scope.objs = []
	$scope.customFullscreen = false;

	$scope.toggleSideNav = function () {
		console.log('hello');
		$mdSidenav('side-navigator')
		.toggle()
	}

	$scope.closeSideNav = () => $mdSidenav('side-navigator').close().then(()=> console.log('closed sidenav'))

	$scope.toggleDialog = function (ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'partials/dialog.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true,
			fullscreen: $scope.customFullscreen
		})
		.then(function(answer) {
			$scope.status = 'You said the information was "' + answer + '".';
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	}

	function DialogController($scope, $mdDialog) {
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};
	}
}]);
