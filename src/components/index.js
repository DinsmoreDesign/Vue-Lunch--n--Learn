const Card = () => import(/* webpackChunkName: "component-card" */ '@/components/Card.vue');
const Error = () => import(/* webpackChunkName: "component-error" */ '@/components/Error.vue');
const Navigation = () => import(/* webpackChunkName: "component-navigation" */ '@/components/Navigation.vue');
const NavigationItem = () => import(/* webpackChunkName: "component-navigation-item" */ '@/components/NavigationItem.vue');

const EmailIcon = () => import(/* webpackChunkName: "component-email-icon" */ '@/components/icons/EmailIcon.vue');
const ErrorIcon = () => import(/* webpackChunkName: "component-error-icon" */ '@/components/icons/ErrorIcon.vue');
const UserIcon = () => import(/* webpackChunkName: "component-user-icon" */ '@/components/icons/UserIcon.vue');

const Landing = () => import(/* webpackChunkName: "page-component-landing" */ '@/components/pages/Landing.vue');

export {

    Card,
    Error,
    Navigation,
    NavigationItem,

    EmailIcon,
    ErrorIcon,
    UserIcon,

    Landing

};