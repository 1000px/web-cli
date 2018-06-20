/**
 * test模块ajax数据服务
 */
import axios from 'app01/common/ajax';

console.log(axios);
/**
* @name getList
* @params null
*/
export const getList = () => {
	return axios.ajax('list', 'get', null);
};

/**
 * @name getDetail
 * @params id
 */
export const getDetail = (params) => {
	return axios.ajax('detail', 'get', params);
};
