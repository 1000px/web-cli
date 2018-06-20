<!--
	name: module01/detail.vue
	desc: module01模块detail页面
	author: malixiang
-->
<template>
	<div class="content module01-detail">
		<k-nav :parent-path="parentPath"></k-nav>
		<div class="main">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>

<script>
	import kNav from 'main/components/nav';
	export default {
		data () {
			return {
				msg: '飞行管理详情页面',
				parentPath: '/#/'
			};
		},
		components: {
			kNav
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.content {
		width: 1200px;
		margin: 0 auto;
	}
	.main {
		width: 1000px;
		float: left;
		text-align: center;
	}
</style>
