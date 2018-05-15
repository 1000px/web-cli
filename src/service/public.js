/**
 * 公共的ajax数据服务
 */
import axios from '@/common/ajax';

/**
* @name getUserInfo
* @params null
*/
export const getUserInfo = (params) => {
	return axios.ajax('list', 'get', params);
}
