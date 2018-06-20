import Vue from 'vue';
import Router from 'vue-router';
import Module01List from 'main/view/module01/list';
import Module01Detail from 'main/view/module01/detail';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '',
		name: 'module01-list',
		component: Module01List
	}, {
		path: '/detail',
		name: 'module01-detail',
		component: Module01Detail
	}]
});
