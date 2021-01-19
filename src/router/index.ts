import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import ResultsPage from '../views/ResultsPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'resultsPage',
        component: ResultsPage
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
