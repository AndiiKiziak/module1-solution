(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController );

LunchCheckController.$inject = ['$scope']
function LunchCheckController ($scope) {
  $scope.list = '';
  $scope.message = '';
  $scope.sayMessage = function () {
    var neededMessage = check($scope.list);
    $scope.message = neededMessage;
  };
  console.log ("dfs, ds, csacs, ".split(","))


}

   function check(list) {
    var listCheck = list.split(",")
    if (list.length <= 0) {
      return "Please enter data first";
    } else if(listCheck.every(x => /\w/.test(x))){
      if (listCheck.length >= 1 && listCheck.length <= 3) {
        return "Enjoy!";
      } else {
        return  "Too much!";
      }
    }
      return "Remove unnecessary commas";

}


})();
