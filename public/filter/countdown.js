angular.module('app').filter('countdown', function(){
	return function(input) {
		if(input < 0)
			return '00:00';
		
	};
});