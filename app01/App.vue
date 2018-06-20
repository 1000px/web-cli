<template>
	<div id="app">
		<k-header></k-header>
		<router-view/>
	</div>
</template>

<script>
import kHeader from 'app01/components/header.vue';
export default {
	name: 'app',
	data () {
		return {
			msg: '父组件的原始信息'
		};
	},
	components: {
		kHeader
	}
};
</script>

<style>
	html, body {
		width: 100%;
		height: 100%;
		background: #f8f8fc;
	}
	* {
		padding: 0;
		margin: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e55;
	}
</style>
