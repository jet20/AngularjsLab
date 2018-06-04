angular.module('app').controller('app.views.guide.selectEdition', function($scope, $location){
	var vm = this;
	
	vm.editions = [{
		id: '1',
		name: '公务员版',
	},{
		id: '2',
		name: '事业单位版'
	},{
		id: '3',
		name: '教育单位版'
	}];

	vm.selected = vm.editions[0];

	vm.next = function() {
		$location.href = 'features';
	}
});
