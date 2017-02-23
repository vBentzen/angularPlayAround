function UserService () {
  var UserService = {};
  function greeting (name) {
    return 'Hello there ' + name;
  }
  UserService.sayHello = function (name) {
    return greeting(name);
  };
  return UserService;
}

angular
  .module('playAroundApp')
  .factory('UserService', UserService);
