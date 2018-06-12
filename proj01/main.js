// app入口文件
// 初始化 路由、样式、语言、store、全局配置global.json
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'proj01/common/ajax/config';
import utils from '../utils';
import Lang from 'lang';
import store from 'proj01/store';
import 'normalize.css';

Vue.config.productionTip = false;

Vue.use(Lang);
Vue.use(utils);
axios.get('static/config/global.json').then((res) => {
	Vue.prototype.g_Config = res.data;
	axios.setConfig(Vue.prototype.g_Config);

	/* eslint-disable no-new */
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: {App}
	});
}).catch((err) => {
	window.alert(err);
});

