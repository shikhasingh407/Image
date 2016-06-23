'use strict';

describe('Controller: ArtistmoduleCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var ArtistmoduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArtistmoduleCtrl = $controller('ArtistmoduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArtistmoduleCtrl.awesomeThings.length).toBe(3);
  });
});
