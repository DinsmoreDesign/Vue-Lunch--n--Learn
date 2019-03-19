import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

Vue.use(Router);

const router = new Router({

    mode: 'history',
    scrollBehavior (to, from, savedPosition) {

        return savedPosition ? savedPosition : { x: 0, y: 0 };

    },
    routes: [
    
        {
            path: '/',
            name: 'landing',
            component: () => import(/* webpackChunkName: "Landing" */ './views/Landing.vue'),
            meta: {
                getsMember: true
            }
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: () => import(/* webpackChunkName: "AccountsList" */ './views/AccountList.vue')
        },
        {
            path: '/confirm',
            name: 'confirm',
            component: () => import(/* webpackChunkName: "ConfirmMember" */ './views/ConfirmMember.vue')
        },
        {
            path: '/details',
            name: 'details',
            component: () => import(/* webpackChunkName: "MemberDetails" */ './views/MemberDetails.vue')
        },
        {
            path: '/success',
            name: 'success',
            component: () => import(/* webpackChunkName: "Success" */ './views/Success.vue')
        },
        {
			redirect: '/',
			path: '*'
		}
    
    ]

});

router.beforeEach((to, from, next) => {

    if (!to.meta.getsMember && !store.state.userAccounts) {

        store.dispatch('setUserError', {
            hasError: true,
            message: `No user account selected, try again.`
        });

        next('/');

    } else {

        next();

    }

});

export default router;