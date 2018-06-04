angular.module('my-filter', []).filter('rmb', function(){
	return function(amount) {
		var faction = ['角', '分'];
		var digit = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'];
		var unit = [['元', '万', '亿'],['', '拾', '佰', '千']];
		var head = amount < 0 ? '欠': '';

		amount = Math.abs(amount);

		var result = '';
	}
});