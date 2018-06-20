<template>
	<div id="app">
		<k-header></k-header>
		<router-view/>
	</div>
</template>

<script>
import kHeader from 'main/components/header.vue';
export default {
	name: 'app',
	data () {
		return {
			msg: ''
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
	a {
		color: #888;
	}
	a:link, a:active, a:hover {
		color: #5572f1;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e55;
	}
</style>
