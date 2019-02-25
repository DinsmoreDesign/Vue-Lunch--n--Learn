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
				@submit="handleLandingSubmit"
			/>

			<ConfirmMember
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
				@submit="handleChanges"
				@changeEnrollment="handleChanges"
			/>

			<Success
				v-if="pageState.showSuccess"
				v-model="memberDetailsData"
				@reset="handleReset"
			/>

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

			// Generic Methods:
			clearPageState() {

				Object.keys(this.pageState).forEach((state) => {
					
					this.pageState[state] = false;

				});

			},
			// Landing "Page" Methods:
			handleLandingSubmit(searchTerm) {

				return axios.get('/member/search/' + searchTerm)
					.then(response => {

						this.memberConfirmData = response;

						this.clearPageState();

						this.pageState.showConfirm = true;

					})
					.catch(error => {
						
						this.hasError = true;
						this.errorMessage = error;

					});

			},
			// ConfirmMember "Page" Methods:
			handleConfirmMember() {

				return axios.get('/member/accounts/')
                    .then(response => {

						this.memberAccountsData = response;

						this.clearPageState();

						this.pageState.showAccounts = true;

					});

			},
			handleCancelMember() {

				this.clearPageState();

				this.pageState.showLanding = true;

			},
			// AccountList "Page" Methods:
			handleSelectAccount(accountNumber) {

				return axios.get('/member/details/' + accountNumber)
                    .then(response => {

						this.memberDetailsData = response;
						
						this.clearPageState();

						this.pageState.showMember = true;

					});

			},
			// Member "Page" Methods:
			handleChanges(details) {

				return axios.post('/member/update', details)
					.then(response => {
						
						this.clearPageState();

						this.pageState.showSuccess = true;
						
						this.successMessage = message;

					})
					.catch(error => {

						this.hasError = true;
						this.errorMessage = error;

					});

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