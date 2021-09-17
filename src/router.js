import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import MainPage from "@/pages/MainPage";
import Search from "@/pages/Search";
const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/search',
        component: Search
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})