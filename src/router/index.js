import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
const Login = () => import('../views/login.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },{
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
})

router.beforeEach((to, from, next) => {
    // if (to.path !== '/login') {
    //     if (!Cookies.get('owner') || !Cookies.get('token')) {
    //         router.push('/login');
    //     }
    // }
    next()
})

export default router