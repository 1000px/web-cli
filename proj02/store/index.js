/**
 * name: store/index.js
 * desc: 应用全局数据
 * author: malixiang
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment (state) {
			state.count += 5;
		}
	}
});

export default store;
