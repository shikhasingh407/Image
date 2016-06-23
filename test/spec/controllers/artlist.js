'use strict';

describe('Controller: ArtlistCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ArtlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtlistCtrl = $controller('ArtlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArtlistCtrl.awesomeThings.length).toBe(3);
  });
});
