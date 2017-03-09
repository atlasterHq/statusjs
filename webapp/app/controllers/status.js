module.exports = function($scope,Restangular){
  Restangular
    .all("status")
    .customGET()
    .then(function(resp){
      $scope.status = resp;
    })
    .catch(function(err){
      console.log(err);
    });
};
