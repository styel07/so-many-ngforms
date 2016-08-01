angular.module('myApp',[])
.controller('myController', function($scope) {
  var vm = this;

  vm.countries = [
    {name: "Antigua", code: "ag" },
    {name: "Aruba", code: "aw" },
    {name: "Burundi", code: "bi" },
    {name: "Brunei", code: "bn" }
  ];
  vm.gender = ['male', 'female'];

  $scope.submit = function(){
    console.log($scope.data);
    console.log($scope.myForm);
    if( $scope.myForm.$valid ) {
        console.log('The form is valid');
    } else {
        console.log('The form is invalid');
    }

  };
});
