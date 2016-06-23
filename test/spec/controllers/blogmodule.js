'use strict';

describe('Controller: BlogmoduleCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var BlogmoduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogmoduleCtrl = $controller('BlogmoduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogmoduleCtrl.awesomeThings.length).toBe(3);
  });
});
