import axios from 'axios';

// 开发环境
axios.setConfig = function (config) {
	console.log(config);
	axios.defaults.baseURL = config.BASE_URL;
	axios.defaults.timeout = config.AJAX_TIMEOUT;
};

export default axios;