<template>
	<div class="header">
		<ul>
			<li v-for="nav in parentNav"><a :href="nav.path">{{nav.name}}</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'kHeader',
	data () {
		return {
			parentNav: [
				{
					id: '10001',
					name: '飞行管理',
					path: '/#/'
				},
				{
					id: '10002',
					name: '设备管理',
					path: '/app01.html#/device'
				},
				{
					id: '10003',
					name: '历史记录',
					path: '/app01.html#/record'
				}
			]
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
	width: 100%;
	height: 80px;
	background: #fff;
}
.header ul {
	float: right;
}
.header ul li {
	list-style-type: none;
	float: left;
	width: 80px;
	height: 80px;
	line-height: 80px;
	text-align: center;
}
.header ul li a {
	text-decoration: none;
}
</style>
