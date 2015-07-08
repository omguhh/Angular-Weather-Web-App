var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

var $mainButton = $(".md-button.md-fab"),
    $closeButton = $(".close-button"),
    $buttonWrapper = $(".button-wrapper"),
    $ripple = $(".ripple"),
    $layer = $(".layered-content");

//should move this outta here
app.factory('forecast', ['$http', function($http) {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?q=dubai,uae&units=metric')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);

app.controller('AppCtrl', ['$scope','forecast', function($scope, forecast){
    forecast.success(function(data) {
        $scope.currweth = data;
    });


    $scope.test = function() {
        $mainButton.addClass("clicked");
    }
}]);

app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    });