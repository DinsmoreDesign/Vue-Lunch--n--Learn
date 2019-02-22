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
				v-model="memberConfirmData"
				@confirm="handleConfirmMember"
				@cancel="handleCancelMember"
			/>

			<AccountList
				v-if="pageState.showAccounts"
				v-model="memberAccountsData"
				@select="handleSelectAccount"
			/>

			<MemberDetails
				v-if="pageState.showMember"
				v-model="memberDetailsData"
				@submit="handleSubmitChanges"
				@unenroll="handleSubmitChanges"
			/>

			<Success
				v-if="pageState.showSuccess"
				v-model="memberDetailsData"
				@reset="handleReset"
			/> -->


		</div>

  	</div>

</template>





<script>

	import axios from '@/plugins/axios';

	import { Card, Error, Navigation, AccountList, ConfirmMember, Landing, MemberDetails, Success } from '@/components';

	export default {

		name: "app",
		components: {

			Card,
			Error,
			Navigation,
			AccountList,
			ConfirmMember,
			Landing,
			MemberDetails,
			Success

		},
		data() {
			return {

				hasError: false,
				errorMessage: null,
				pageState: {
					showLanding: true,
					showConfirm: false,
					showAccounts: false,
					showMember: false,
					showSuccess: false
				},
				memberConfirmData: null,
				memberAccountsData: null,
				memberDetailsData: null

			}
		},
		methods: {

			// Landing "Page" Methods:
			handleLandingSuccess(data) {

				this.memberConfirmData = data;

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
			handleConfirmMember(data) {

				this.memberAccountsData = data;

				this.clearPageState();

				this.pageState.showAccounts = true;

			},
			handleCancelMember() {

				this.clearPageState();

				this.pageState.showLanding = true;

			},

			// AccountList "Page" Methods:
			handleSelectAccount(data) {

				this.memberDetailsData = data;

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