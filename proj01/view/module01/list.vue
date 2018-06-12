<!--
	name: module01/list.vue
	desc: module01模块list页面
	author: malixiang
-->
<template>
	<div class="content module01-list">
		<a href="/#/">proj01列表</a><br>
		<a href="/#/detail" target="_blank">proj01详情</a><br>
		<a href="/proj02.html#/module01/list">proj02列表页</a><br>
		<a href="/proj02.html#/module01/detail?id=123">proj02详情</a>
		<!--<router-link to="/proj02.html#/module01/list">proj02列表页</router-link>-->
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	const _localStorage = window.localStorage;

	export default {
		data () {
			return {
				msg: 'Proj01 Module01 List 示例页面'
			};
		},
		mounted () {
			_localStorage.setItem('c', '1000px');
		}
	};
	</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
