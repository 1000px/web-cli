import axios from '@/common/ajax/config';
import router from '@/router';

// axios.defaults.withCredentials = true;
// 添加请求拦截器
// axios.interceptors.request.use(config => {
// 	if (config.method === 'get' || config.method === 'delete') {
// 		config.params = config.data;
// 	}
// 	return config;
// }, error => {
// 	return Promise.reject(error);
// });

// 添加响应拦截器
// axios.interceptors.response.use(response => {
// 	if (response.status === 200 || response.status === 304 || response.status === 400) {
// 		return Promise.resolve(response.data);
// 	}
// }, error => {
// 	return Promise.reject(error);
// });

export default {
	ajax (url, method, params) {
		return new Promise((resolve, reject) => {
			axios({
				url: url,
				method: method,
				data: params,
				headers: {
					'Content-type': 'application/json;charset=utf-8'
				}
			}).then(response => {
				// 请求接口正确且成功时
				if (response.data.status === 200) {
					resolve(response.data.result ? response.data.result : response.data);
				} else if (response.data.status === 500) {
					// 请求接口错误或不成功时
					if (response.data.message) {
						reject(response.data.message);
					} else {
						// 请求接口错误或不成功时
						reject('服务器崩溃了~~~');
					}
				} else if (response.data.status === 403) {
					reject('您没有该功能的访问权限，如需开通，请联系管理员');
				} else if (response.data.status === 401) {
					reject(response.data.message);
					router.push({path: '/login'});
				} else if (response.data.status === 400 || response.data.status === 1001) {
					reject(response.data.message);
				} else {
					reject('请求失败~~~');
				}
			})
			.catch(error => {
				reject(error);
			});
		});
	}
};