<!--
	name: module01/list.vue
	desc: module01模块list页面
	author: malixiang
-->
<template>
	<div class="content module01-list">
		<a href="/#/">proj01列表</a><br>
		<a href="/#/detail">proj01详情</a><br>
		<a href="/proj02.html#/module01/list">proj02列表页</a><br>
		<a href="/proj02.html#/module01/detail">proj02详情</a>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	const _localStorage = window.localStorage;
	export default {
		data () {
			return {
				msg: 'Proj02 Module01 List 示例页面'
			};
		},
		mounted () {
			console.log(_localStorage['c']);
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
