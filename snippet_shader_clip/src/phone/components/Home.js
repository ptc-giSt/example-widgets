// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

$scope.apply_simple_shader = function() {
    $scope.view.wdg['modelItem-1']['shader'] = "simple_shader";
}

$scope.apply_slice_world_based = function() {
  //$scope.view.wdg['model-2']['translucent']=1; 
  var slicexCur = ($scope.view.wdg['slider-1']['value']/100.0)*0.1; 
  var slicewidthCur = ($scope.view.wdg['slider-2']['value']/100.0)*0.5; 
  $scope.view.wdg['modelItem-1']['shader'] = "slice_world_based;slicex f "+ slicexCur + ";slicewidth f " + slicewidthCur;
}
