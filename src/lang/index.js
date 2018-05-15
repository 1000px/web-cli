/**
 * 语言包入口文件
 * 如果需要 可以ajax请求语言包 或者设置除默认中文外的其它语言包
 */

// import Axios from '@/common/ajax';
// import Config from '@/config';
import CurrentLanguage from '@/lang/cn.json';

// let lang = Config.LANGUAGE || navigator.browserLanguage || navigator.language;

export default {
	install (Vue, options) {
		Vue.prototype.Lang = CurrentLanguage;
		// Axios.ajax(Config.BASE_URL + '/lang/' + lang + '.json', 'get').then((response) => {
		// 	Vue.prototype.Lang = response.language;
		// }).catch((err) => {
		// 	console.log(err);
		// });
	}
};
