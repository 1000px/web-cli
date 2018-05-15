<!--
	name: list.vue
	desc: test模块list页面
	author: malixiang
-->
<template>
	<div class="hello">
		<h1>{{Lang.LIST_PAGE.NAV_TITLE }}</h1>
		<div v-for="article in articles">
			<router-link :to="{name: 'article', params: {user: 123}}">
                {{article.title}}
          	</router-link>
          	<span>{{article.desc}}</span>
        </div>
		<h4>{{message}}</h4>
		<button @click="toArticle">点击跳转</button>
	</div>
</template>

<script>
import {getList} from '@/service/test';
export default {
	name: 'list',
	data () {
		return {
			articles: [],
			message: 'Hello Vue.js'
		};
	},
	created () {
		getList().then((res) => {
			this.articles = res.data.articles;
		}).catch((err) => {
			console.error(err);
		});
	},
	methods: {
		toArticle: () => {
			console.log('toArticle');
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
}
</style>
