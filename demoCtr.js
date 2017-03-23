angular.module('demoApp', ['iosdatepicker'])
    .controller('demoCtr', function($scope) {
         var today = new Date();
            $scope.date = today;

    });