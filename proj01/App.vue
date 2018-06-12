<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import vHeader from 'proj01/components/header.vue';
export default {
	name: 'app',
	data () {
		return {
			msg: '父组件的原始信息'
		};
	},
	components: {
		vHeader
	},
	methods: {
		changeMsg: function () {
			this.msg = '改变后的父组件信息';
		}
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e55;
	margin-top: 60px;
}
</style>
