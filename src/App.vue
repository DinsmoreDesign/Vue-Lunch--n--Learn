<template>

	<div id="app">

		<Navigation />

  	</div>

</template>





<script>

	import axios from '@/plugins/axios';

	import { Navigation } from '@/components';

	export default {

		name: "app",
		components: {

			Navigation

		},
		data() {
			return {



			}
		}

	};

</script>





<style lang="scss">

	body,
	html {
		padding: 0;
		margin: 0;
	}

</style>