angular.module('app').controller('app.views.guide.features', function($scope){
	var vm = this;
	
	vm.features = [{
		id: '1',
		name: 'SupportPrepare',
		displayName: '是否支持备考',
		isEnable: true
	}, {
		id: '2',
		name: 'SupportLotAlone',
		displayName: '是否支持单机版签到抽签',
		isEnable: true
	}, {
		id: '3',
		name: 'SupportExamAlone',
		displayName: '是否支持单机版面试',
		isEnable: true
	}, {
		id: '4',
		name: 'SupportWait',
		displayName: '是否支持侯考',
		isEnable: true
	}, {
		id: '5',
		name: 'SupportMultiPack',
		displayName: '是否支持分组',
		isEnable: false
	}];

});
