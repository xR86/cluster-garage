dash.directive('message', function() { 
  return { 
    restrict: 'E',
    replace: true,
    templateUrl: 'public/js/dashboard/messages/messagePartial.html' 
  }; 
});