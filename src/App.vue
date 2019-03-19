<template>

	<div id="app">

		<Error
			v-if="error.hasError"
			:message="error.message"
			@close="setUserError({ error: false, message: null })"
		/>

		<Navigation />

		<div class="page-content">

			<router-view></router-view>

		</div>

  	</div>

</template>





<script>

	import { mapState, mapActions } from 'vuex';
	import axios from '@/plugins/axios';

	import { Card, Error, Navigation } from '@/components';

	export default {

		name: "app",
		components: {

			Card,
			Error,
			Navigation

		},
		computed: {

			...mapState({

				error: state => state.userError
				
			})

		},
		methods: {

			...mapActions([

				'setUserError'

			])

		}

	};

</script>





<style lang="scss">

	@import './assets/css/transitions';
	@import './assets/css/app';

</style>