import Vue from 'vue';
import Router from 'vue-router';
import Module01List from 'proj02/view/module01/list';
import Module01Detail from 'proj02/view/module01/detail';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/module01',
		component: { template: '<router-view/>' },
		children: [
			{
				path: 'list',
				name: 'module01-list',
				component: Module01List
			}, {
				path: 'detail',
				name: 'module01-detail',
				component: Module01Detail
			}
		]
	}]
});
