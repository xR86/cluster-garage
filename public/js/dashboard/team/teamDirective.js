dash.directive('team', function() { 
  return { 
    restrict: 'E',
    replace: true,
    templateUrl: 'public/js/dashboard/team/teamPartial.html' 
  }; 
})
.filter('search', function () {

    return function (users, searchString) {

        console.log('filter');

    };

});