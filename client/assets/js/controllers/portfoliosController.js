app.controller('portfoliosController', ['$scope', 'portfolioFactory', function($scope, portfolioFactory){
	$scope.obj = {}
	$scope.objs = []

	$scope.func = function (idx) {
		portfolioFactory.delete( () => {

		})
	}
}]);
