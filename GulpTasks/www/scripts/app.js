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
angular.module('gulpTasksApp').controller('aboutController', function ($scope) {
    $scope.message = 'How About this page.';
});
angular.module('gulpTasksApp').controller('contactController', function ($scope) {
    $scope.message = 'Ruf mich an';
});
angular.module('gulpTasksApp').controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Legen... wait for it.. dary';
});