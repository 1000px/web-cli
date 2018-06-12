<!--
	name: module01/detail.vue
	desc: module01模块list页面
	author: malixiang
-->
<template>
	<div class="content module01-detail">
		<a href="/#/">proj01列表</a><br>
		<a href="/#/detail">proj01详情</a><br>
		<a href="/proj02.html#/module01/list">proj02列表页</a><br>
		<a href="/proj02.html#/module01/detail">proj02详情</a>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Proj02 Module01 Detail 示例页面'
			};
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
