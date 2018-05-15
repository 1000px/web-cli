import Vue from 'vue';
import Router from 'vue-router';
import List from '@/view/test/list.vue';
import Article from '@/view/test/article.vue';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '',
		name: 'list',
		component: List
	}, {
		path: '/article/:user',
		name: 'article',
		component: Article,
		props: true
	}]
});
