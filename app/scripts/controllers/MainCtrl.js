function MainCtrl (UserService) {
  var vm = this;

  vm.removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
      if( arr[i]
        && arr[i].hasOwnProperty(attr)
        && (arguments.length > 2 && arr[i][attr] === value ) ){

          arr.splice(i,1);

        }
      }
    };

    vm.removeFromStock = function (dog, index) {
      vm.dogs.splice(index, 1);
    };

    vm.dogs = [{
      name: 'Husky',
      id: 7297510
    },{
      name: 'Malamut',
      id: 0278916
    },{
      name: 'GravHund',
      id: 2389017
    },{
      name: 'Corgi',
      id: 1000983
    }];

    vm.sayHello = function (name) {
      UserService.sayHello(name);
    };

    vm.addDog = function (dog, index) {
      vm.dogs.push({name: dog, id: vm.dogs.length +1});
    };


  }

  angular
  .module('playAroundApp')
  .controller('MainCtrl', MainCtrl);
