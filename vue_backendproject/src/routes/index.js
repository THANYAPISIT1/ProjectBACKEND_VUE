import { createRouter, createWebHistory } from 'vue-router';

// import DefaultLayout from '@/layouts/DefaultLayout.vue';

// import Home from '../views/Home.vue'
// import CusForm from '../views/CusForm.vue'
// import Customer from '../views/Customer.vue'
// import ConDetail from '../views/ConDetail.vue'
// import CusDetail_edit from '../views/CusDetail_edit.vue'
// import CusDetail from '../views/CusDetail.vue'
// import Finance from '../views/Finance.vue'

const Home = () => import('../views/Home.vue');
// const Contract = () => import('../views/Contract.vue')
// const AddCon = () => import('../views/AddCon.vue')
// const About = () => import('../views/About.vue')

const routes = [
    { path: '/', component: Home},
    { path: '/CusForm', component: () => import('../views/CusForm.vue')},
    { path: '/Customer', component: () => import('../views/Customer.vue')},
    { path: '/ConDetail/:ConID', component: () => import('../views/ConDetail.vue')},
    { path: '/ConDetail_edit/:ConID', component: () => import('../views/ConDetail_edit.vue')},
    { path: '/ConForm', component: () => import('../views/ConForm.vue')},
    { path: '/CusDetail', component: () => import('../views/CusDetail.vue')},
    { path: '/CusDetail_edit', component: () => import('../views/CusDetail_edit.vue')},
    { path: '/Finance', component: () => import('../views/Finance.vue')},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;