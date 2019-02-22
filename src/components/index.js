const Card = () => import(/* webpackChunkName: "component-card" */ '@/components/Card.vue');
const Error = () => import(/* webpackChunkName: "component-error" */ '@/components/Error.vue');
const Navigation = () => import(/* webpackChunkName: "component-navigation" */ '@/components/Navigation.vue');
const NavigationItem = () => import(/* webpackChunkName: "component-navigation-item" */ '@/components/NavigationItem.vue');

const EmailIcon = () => import(/* webpackChunkName: "component-email-icon" */ '@/components/icons/EmailIcon.vue');
const ErrorIcon = () => import(/* webpackChunkName: "component-error-icon" */ '@/components/icons/ErrorIcon.vue');
const UserIcon = () => import(/* webpackChunkName: "component-user-icon" */ '@/components/icons/UserIcon.vue');

const AccountList = () => import(/* webpackChunkName: "page-account-list" */ '@/components/pages/AccountList.vue');
const ConfirmMember = () => import(/* webpackChunkName: "page-confirm-member" */ '@/components/pages/ConfirmMember.vue');
const Landing = () => import(/* webpackChunkName: "page-landing" */ '@/components/pages/Landing.vue');
const MemberDetails = () => import(/* webpackChunkName: "page-member-details" */ '@/components/pages/MemberDetails.vue');
const Success = () => import(/* webpackChunkName: "page-success" */ '@/components/pages/Success.vue');

export {

    Card,
    Error,
    Navigation,
    NavigationItem,

    EmailIcon,
    ErrorIcon,
    UserIcon,

    AccountList,
    ConfirmMember,
    Landing,
    MemberDetails,
    Success

};