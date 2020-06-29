var app=angular.module("demo",[])
.controller("demoCtrl",function($scope,stringService){
    $scope.transformString=function(input)
    {
      
      $scope.output = stringService.processString(input)
      

    }
    

})