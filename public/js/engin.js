define('Engin',
    ['jquery',
        'underscore',
        'angular',
        'angular-resource'],
    function($, _, angular){
        "use strict";
        var Engin = angular.module('Engin', []).
            config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'postList.html',
                    controller: "PostListCtrl"
                }).
                when('/post/:id', {
                    templateUrl: 'postShow.html',
                    controller: "PostShowCtrl"
                }).
                when('/posts/add', {
                    templateUrl: 'postAdd.html',
                    controller: "PostAddCtrl"
                }).
                when('/post/:id/edit', {
                    templateUrl: 'postEdit.html',
                    controller: "PostEditCtrl"
                });
            $locationProvider.html5Mode(true);
        }]);
        window.Engin = Engin;
        return Engin;
    }
);