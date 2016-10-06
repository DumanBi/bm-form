(function() {
  'use strict';

  angular
    .module('soc-faf-bmForm', []);

  angular
    .module('soc-faf-bmForm')
    .directive('bmForm', bmForm);

  function bmForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'form.directive.html',
      scope: {
        url: '=',
        title: '=',
        tags: '=',
        save: '&'
      },
      controller: bmFormCtrl,
      controllerAs: 'bm',
      bindToController: true
    };

    return directive;
  };

  function bmFormCtrl(){
    var bm = this;
    bm.clear = clear;

    function clear(){
      bm.url = '';
      bm.title = '';
      bm.tags = [];
    }
  };

})();
