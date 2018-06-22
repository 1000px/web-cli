<template>
	<div class="nav">
		<ul>
			<li v-for="nav in navList"><a :href="nav.path">{{nav.name}}</a></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'kNav',
		props: ['parentPath'],
		data () {
			return {
				navList: [
					{
						name: '列表页',
						path: this.parentPath + ''
					},
					{
						name: '详细',
						path: this.parentPath + 'detail'
					}
				]
			};
		}
	};
</script>
<style scoped>
	.nav {
		float: left;
		width: 180px;
		text-align: right;
		padding-top: 32px;
		padding-right: 18px;
		min-height: 600px;
		border-right: 1px solid #eee;
	}
	.nav ul li {
		height: 24px;
		line-height: 24px;
		list-style-type: none;
	}
	.nav ul li a {
		text-decoration: none;
	}
</style>
