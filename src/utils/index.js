import Config from '@/config';

// Control debugger tools is disabled
let ctrls = [
	'log',
	'assert',
	'clear',
	'count',
	'dir',
	'dirxml',
	'error',
	'group',
	'groupCollapsed',
	'groupEnd',
	'info',
	'profile',
	'profileEnd',
	'table',
	'time',
	'timeEnd',
	'timeStamp',
	'trace',
	'warn'
];

let Logger = (function () {
	let _logger = {};
	for (let item in ctrls) {
		_logger[ctrls[item]] = Config.debugger ? console[ctrls[item]] : function () {};
	}
	return _logger;
})();

export default {
	install (Vue, options) {
		Vue.prototype.Logger = Logger;
	}
};
