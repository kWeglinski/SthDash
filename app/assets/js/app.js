angular.module('SthDash', [
    'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
    $routeProvider  
        .when('/', {
            templateUrl: '/views/index.html',
            controller: 'home'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})