var app = angular.module('chatApp', ['firebase']);


app.directive('schrollBottom', function () {
  return {
    scope: {
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue)
        {
          $(element).scrollTop($(element)[0].scrollHeight);
        }
      });
    }
  }
});

   /* osafCms.config(['$routeProvider', function($routeProvider) {

   $routeProvider.
    when('/index', {
        templateUrl: 'index1233.html',
        controller: 'dashboard_ctrl'
    }).
  
     otherwise({
        redirectTo: '/'
    });
	 
     
}]);*/