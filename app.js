// So no local variables bleed into the global scope
(function(){
'use strict';

// It defined what the angular app is responsible for
angular.module('myFirstApp',[])

// $ means that angular provides it
.controller('MyFirstController',function($scope){
    $scope.name="Yaakov";
    $scope.sayHello = function (){
        return "Hi corazón!"
    }
    $scope.name2="Mila"
})


})();