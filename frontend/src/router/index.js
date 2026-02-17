import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Navigation guard - protect routes that need authentication
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('token')
    
    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/login')
    } else if ((to.path === '/login' || to.path === '/register') && isLoggedIn) {
        next('/dashboard')
    } else {
        next()
    }
})

export default router