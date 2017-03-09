module.exports = function($scope,Restangular){
  Restangular
    .all("config")
    .customGET()
    .then(function(resp){
      $scope.appName = resp.name;
    })
    .catch(function(err){
      console.log(err);
    });
};
