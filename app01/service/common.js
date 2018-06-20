/**
 * 公共的ajax数据服务
 */
import axios from 'app01/common/ajax';

/**
* @name getUserInfo
* @params null
*/
export const getUserInfo = (params) => {
	return axios.ajax('list', 'get', params);
}
