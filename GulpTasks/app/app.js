var gulpTasksApp = angular.module('gulpTasksApp', ['ui.router', 'gulpTasksApp.templates']);

gulpTasksApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home',
        {
            url: '/home',
            templateUrl: 'components/home/index.html',
            controller: 'homeController'
        })
       
        .state('about',
        {
            url: '/about',
            templateUrl: 'components/about/index.html',
            controller: 'aboutController'
        })

        .state('contact',
        {
            url: '/contact',
            templateUrl: 'components/contact/index.html',
            controller: 'contactController'
        })
    $urlRouterProvider.otherwise("/home");
});

gulpTasksApp.controller('mainController', function ($scope) {
    
});