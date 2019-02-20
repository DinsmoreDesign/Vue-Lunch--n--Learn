<template>

	<div id="app">

		<Navigation />

		<div class="page-content">

				<Landing @success="handleLandingSuccess" @error="handleLandingError" />

		</div>

  	</div>

</template>





<script>

	import axios from '@/plugins/axios';

	import { Card, Navigation, Landing } from '@/components';

	export default {

		name: "app",
		components: {

			Card,
			Navigation,
			Landing

		},
		data() {
			return {

				member: null,
				hasError: false,
				errorMessage: null

			}
		},
		methods: {

			handleLandingSuccess(data) {

				this.member = data;

			},
			handleLandingError(message) {

				this.hasError = true;
				this.errorMessage = message;

			}

		}

	};

</script>





<style lang="scss">

	@import './assets/transitions';

	* {
		box-sizing: border-box;
	}

	body,
	html {
		font-size: 16px;
	}

	body,
	html,
	p,
	h1,
	h2,
	h3,
	h4,
	h5 {
		font-family: sans-serif;
		padding: 0;
		margin: 0;
		color: #777;
	}

	.page-content {
		margin: 0 auto;
		padding: 1rem;
	}

	@media screen and (min-width: 1200px) {

		.page-content {
			max-width: 75%;
		}

	}

</style>