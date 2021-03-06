const AccountTable = () => import(/* webpackChunkName: "component-account-table" */ '@/components/AccountTable.vue');
const Card = () => import(/* webpackChunkName: "component-card" */ '@/components/Card.vue');
const Error = () => import(/* webpackChunkName: "component-error" */ '@/components/Error.vue');
const Navigation = () => import(/* webpackChunkName: "component-navigation" */ '@/components/Navigation.vue');
const NavigationItem = () => import(/* webpackChunkName: "component-navigation-item" */ '@/components/NavigationItem.vue');
const TextBox = () => import(/* webpackChunkName: "component-text-box" */ '@/components/TextBox.vue');
const TextInput = () => import(/* webpackChunkName: "component-text-input" */ '@/components/TextInput.vue');

const EmailIcon = () => import(/* webpackChunkName: "icon-email" */ '@/components/icons/EmailIcon.vue');
const ErrorIcon = () => import(/* webpackChunkName: "icon-error" */ '@/components/icons/ErrorIcon.vue');
const UserIcon = () => import(/* webpackChunkName: "icon-user" */ '@/components/icons/UserIcon.vue');

const AccountList = () => import(/* webpackChunkName: "page-account-list" */ '@/components/pages/AccountList.vue');
const ConfirmMember = () => import(/* webpackChunkName: "page-confirm-member" */ '@/components/pages/ConfirmMember.vue');
const Landing = () => import(/* webpackChunkName: "page-landing" */ '@/components/pages/Landing.vue');
const MemberDetails = () => import(/* webpackChunkName: "page-member-details" */ '@/components/pages/MemberDetails.vue');
const Success = () => import(/* webpackChunkName: "page-success" */ '@/components/pages/Success.vue');

export {

    AccountTable,
    Card,
    Error,
    Navigation,
    NavigationItem,
    TextBox,
    TextInput,

    EmailIcon,
    ErrorIcon,
    UserIcon,

    AccountList,
    ConfirmMember,
    Landing,
    MemberDetails,
    Success

};