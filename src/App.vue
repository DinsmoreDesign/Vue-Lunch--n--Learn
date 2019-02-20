<template>

	<div id="app">

		<Error
			v-if="hasError"
			:message="errorMessage"
			@close="hasError = false"
		/>

		<Navigation />

		<div class="page-content">

			<Landing
				v-if="pageState.showLanding"
				@success="handleLandingSuccess"
				@error="handleLandingError"
			/>

			<!-- <ConfirmMember
				v-if="pageState.showConfirm"
				@confirm="handleConfirmMember"
				@cancel="handleCancelMember"
			/>

			<AccountList
				v-if="pageState.showAccounts"
				@select="handleSelectAccount"
			/>

			<Member
				v-if="pageState.showMember"
				@submit="handleSubmitChanges"
				@unenroll="handleSubmitChanges"
			/>

			<Success
				v-if="pageState.showSuccess"
				@reset="handleReset"
			/> -->


		</div>

  	</div>

</template>





<script>

	import axios from '@/plugins/axios';

	import { Card, Error, Navigation, Landing } from '@/components';

	export default {

		name: "app",
		components: {

			Card,
			Error,
			Navigation,
			Landing

		},
		data() {
			return {

				member: null,
				hasError: false,
				errorMessage: null,
				pageState: {
					showLanding: true,
					showConfirm: false,
					showAccounts: false,
					showMember: false,
					showSuccess: false
				}

			}
		},
		methods: {

			// Landing "Page" Methods:
			handleLandingSuccess(data) {

				this.member = data;

				this.clearPageState();

				this.pageState.showConfirm = true;

			},
			handleLandingError(message) {

				this.hasError = true;
				this.errorMessage = message;

			},

			// Generic Methods:
			clearPageState() {

				Object.keys(this.pageState).forEach((state) => {
					
					this.pageState[state] = false;

				});

			},

			// ConfirmMember "Page" Methods:
			handleConfirmMember() {

				this.clearPageState();

				this.pageState.showAccounts = true;

			},
			handleCancelMember() {

				this.clearPageState();

				this.pageState.showLanding = true;

			},

			// AccountList "Page" Methods:
			handleSelectAccount() {

				this.clearPageState();

				this.pageState.showMember = true;

			},

			// Member "Page" Methods:
			handleSubmitChanges(message) {

				this.clearPageState();

				this.pageState.showSuccess = true;
				
				this.successMessage = message;

			},

			// Success "Page" Methods:
			handleReset() {

				this.clearPageState();

				this.pageState.showLanding = true;

			}

		}

	};

</script>





<style lang="scss">

	@import './assets/css/transitions';
	@import './assets/css/app';

</style>