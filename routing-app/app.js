var app = angular.module("appName", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        .when('/courses', {
            templateUrl: 'courses.html',
            controller:'coursesController'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .when('/test', {
            template: '<h1>Wow..Inline Template working fine!</h1>'
        })
        .otherwise({
            redirectTo: '/home'
        });
      
});

app.controller("homeController", function ($scope) {
    $scope.message = "Home Page";
});
app.controller("coursesController", function ($scope) {
    $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
});