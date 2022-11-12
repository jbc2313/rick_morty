import { createRouter, createWebHistory } from 'vue-router'
import Home from './
import Rick from './components/Rick.vue'
import Morty from './components/Morty.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home, 
        },
        {
            path: '/rick',
            component: Rick,
        },
        {
            path: '/morty',
            component: Morty,
        }
    ]
})
