app.controller('portfoliosController', ['$scope', 'portfolioFactory', '$mdSidenav', function($scope, portfolioFactory, $mdSidenav){
	$scope.objs = []

	$scope.toggleSideNav = function () {
		console.log('hello');
		$mdSidenav('side-navigator')
		.toggle()
		.then(() => {
			console.log('toggle complete');
		})
	}

	$scope.func = function (idx) {
		portfolioFactory.delete( () => {

		})
	}
}]);
