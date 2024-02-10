import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
// import Home from '../views/Home.vue'
// import Contract from '../views/Contract.vue'
// import AddCon from '../views/AddCon.vue'
// import About from '../views/About.vue'

const Home = () => import('../views/Home.vue')
// const Contract = () => import('../views/Contract.vue')
// const AddCon = () => import('../views/AddCon.vue')
// const About = () => import('../views/About.vue')

const routes = [
    { path: '/', component: Home},
    { path: '/Form', component: () => Contract('../views/Form.vue')},
    { path: '/About', component: () => import('../views/About.vue')},
    { path: '/Addcon', component: () => AddCon('../views/AddCon.vue')},
    { path: '/Contract', component: () => Contract('../views/Contract.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;