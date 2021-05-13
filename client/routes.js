import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Products from '../imports/ui/components/Products.vue';
import Cart from "../imports/ui/components/Cart.vue"
import Orders from '../imports/ui/components/Orders.vue';
import Profile from '../imports/ui/components/Profile.vue';
import Signup from '../imports/ui/components/SignupForm.vue';

const routes = [
    {
    path: "/products",
    name: "Products",
    component: Products
    },
    {
    path: "/cart",
    name: 'Cart',
    component: Cart
    }, 
    {
    path: "/orders",
    name: 'Orders',
    component: Orders
    },
    
    {
    path: "/profile",
    name: 'Profile',
    component: Profile
    },
    {
        path: "/signup",
        name: 'Signup',
        component: Signup
    },

    
]

const router = new VueRouter({
    routes
})

export default router