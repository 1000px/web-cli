<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<button @click="getParentInfo">Children Button</button>
		<p>{{msg}}</p>
		<p>{{parent}}</p>
		<h2>{{Lang.HELP}}</h2>
	</div>
</template>

<script>
export default {
	name: 'header',
	props: ['parent'],
	data () {
		return {
			msg: this.parent
		};
	},
	methods: {
		getParentInfo: function () {
			console.log(1000, this.msg);
		}
	},
	watch: {
		parent (a1, a2) {
			this.msg = a1;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	font-weight: normal;
	color: red;
}
</style>
