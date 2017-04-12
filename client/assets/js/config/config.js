app.config(function($routeProvider, $mdThemingProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	const darkRedMap = $mdThemingProvider.extendPalette('red', {
		'500': '#932010',
		'contrastDefaultColor': 'dark'
	});

	// Register the new color palette map with the name <code>neonRed</code>
	$mdThemingProvider.definePalette('darkred', darkRedMap);

	// Use that theme for the primary intentions
	$mdThemingProvider.theme('default')
	.primaryPalette('darkred');
});
