import VueRouter from "vue-router";
import login from './components/login.vue'
import Vue from "vue";
import register from "./components/register";
import Home from "./components/Home";
import comic from "./components/comic";
Vue.use(VueRouter)
const router = new VueRouter(
    {
        mode:'history',
        routes:[
            {
                path: '/',
                name:'home',
                component: Home
            },
            {
                path: '/login',
                name:'login',
                component: login
            },
            {
                path: '/register',
                name:'register',
                component: register
            },
            {
                path: '/comic',
                name:'comic',
                component: comic
            },
            ]
    })
export default router