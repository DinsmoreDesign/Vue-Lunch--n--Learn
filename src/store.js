import Vue from 'vue';
import Vuex from 'vuex';

import axios from '@/plugins/axios';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        userAccounts: null,
        selectedAccount: null,
        userError: {
            hasError: false,
            message: null
        }

    },
    mutations: {

        SET_USER_ACCOUNTS(state, data) {

            state.userAccounts = data;

        },
        SET_SELECTED_ACCOUNT(state, data) {

            state.selectedAccount = data;

        },
        SET_USER_ERROR(state, { hasError, message }) {

            state.userError = {
                hasError,
                message
            };

        }

    },
    actions: {

        getUserAccounts({ dispatch, commit }, searchTerm) {

            return new Promise((resolve, reject) => {

                return axios.get('/member/' + searchTerm)
					.then(response => {

                        commit('SET_USER_ACCOUNTS', response);

                        return resolve(response);

					})
					.catch(error => {

                        dispatch('setUserError', {
                            hasError: true,
                            message: error
                        });

                        return reject(error);

					});

            });

        },
        setSelectedAccount({ commit }, account) {

            commit('SET_SELECTED_ACCOUNT', account);

        },
        setUserError({ commit }, errorObject) {

            commit('SET_USER_ERROR', errorObject);

        },
        clearAccounts({ commit }) {

            commit('SET_SELECTED_ACCOUNT', null);
            commit('SET_USER_ACCOUNTS', null);

        }
        
    },
    getters: {

        fullName(state) {

            if (state.userAccounts) {

                const member = state.userAccounts[0].member;

                return `${member.lastName}, ${member.firstName} ${member.middleInitial}`;

            }
            return null;            

        }

    }

});