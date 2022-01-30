import {createRouter, createWebHistory} from 'vue-router';
import UserList                         from "@/views/UserList";

const routes = [
    {
        path      : '/',
        name      : 'UserList',
        component : UserList
    },
    {
        path : '/users/create',
        name : 'UserCreate',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component : () => import(/* webpackChunkName: "user_create" */ '../views/UserCreate.vue')
    },
    {
        path : '/users/edit/:id',
        name : 'UserEdit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component : () => import(/* webpackChunkName: "user_edit" */ '../views/UserEdit.vue'),
        props     : true,
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router
