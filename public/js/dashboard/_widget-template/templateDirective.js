dash.directive('template', function() { 
  return { 
    restrict: 'E',
    replace: true,
    templateUrl: 'public/js/dashboard/_widget-template/templatePartial.html' 
  }; 
});