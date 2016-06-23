'use strict';

describe('Controller: PortfoliomoduleCtrl', function () {

  // load the controller's module
  beforeEach(module('webApp'));

  var PortfoliomoduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfoliomoduleCtrl = $controller('PortfoliomoduleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PortfoliomoduleCtrl.awesomeThings.length).toBe(3);
  });
});
