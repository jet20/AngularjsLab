app.controller('modal-ctrl', ['$scope', '$uibModalInstance', 'items', function($scope, $uibModalInstance, items) {
   
    $scope.items = items;

    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.clickItem = function($event, item) {
        $event.preventDefault();
        $scope.selected.item = item;
    }

    $scope.ok = function() {
        $uibModalInstance.close($scope.selected.item);
    }

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    }
}]);