app.directive('message', function() { 
  return { 
    restrict: 'E',
    replace: true,
    templateUrl: 'public/js/directives/message.html' 
  }; 
});