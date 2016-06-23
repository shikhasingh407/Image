'use strict';

describe('Controller: UploadartCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var UploadartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadartCtrl = $controller('UploadartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UploadartCtrl.awesomeThings.length).toBe(3);
  });
});
