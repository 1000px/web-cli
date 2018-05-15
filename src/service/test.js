/**
 * test模块ajax数据服务
 */
import axios from '@/common/ajax';

console.log(axios);
/**
* @name getList
* @params null
*/
export const getList = () => {
	return axios.ajax('list', 'get', null);
};

/**
 * @name getArticle
 * @params id
 */
export const getArticle = (params) => {
	return axios.ajax('list', 'get', params);
};
