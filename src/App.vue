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

	@import './assets/css/transitions';
	@import './assets/css/app';

</style>