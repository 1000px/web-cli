<!--
	name: module01/list.vue
	desc: module01模块list页面
	author: malixiang
-->
<template>
	<div class="content device-list">
		<k-nav :parent-path="parentPath"></k-nav>
		<div class="main">
			<h1>{{msg}}</h1>
		</div>
	</div>
</template>

<script>
	import kNav from 'app01/components/nav';
	export default {
		data () {
			return {
				msg: '设备管理列表页面',
				parentPath: '/app01.html#/device'
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
