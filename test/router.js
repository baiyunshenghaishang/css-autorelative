import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main'

Vue.use(VueRouter)

export const routes = [
    {
        path: '',
        redirect: '/main',
    },
    {
        path: '/main',
        component: Main,
    },
]

const router = new VueRouter({
    routes,
})

export default router
