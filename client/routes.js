import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Orders from './components/Orders.vue'
import Profile from './components/Profile.vue'

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
    path: "/profile",
    name: 'Profile',
    component: Profile
  },
  {
    path: "/orders",
    name: 'Orders',
    component: Orders
  },
]

const router = new VueRouter({
  routes
})

export default router