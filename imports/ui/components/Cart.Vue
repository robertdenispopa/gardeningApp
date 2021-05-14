<template>
    <div class="app">
        <div class ="title-page">
            <h2>Cart</h2>
            
        </div>
        <div class="main">
            >
            <div class="loading" v-if="!$subReady.cart">Loading...</div>
            <table class="products">
                <tr>
                    <th></th>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th></th>
                </tr>
                <CartElement 
                class="product"
                v-for="car in cart"
                v-bind:key="car._id"
                v-bind:car="car" 
                />
                
            </table>
            <button class"placeOrder"> Place Order... </button>
        </div>
    </div>
</template>

<script>

import Vue from "vue";

import CartElement from "./CartElement.vue";

import { CartCollection } from "../../api/collections/CartCollection.js";


export default {
    components: {
        CartElement
    },
    data() {
        return {
        hideCompleted: false
        };
    },
    methods: {
        toggleHideCompleted() {
        this.hideCompleted = !this.hideCompleted;
    }
    },
    meteor: {
    $subscribe: {
    'cart': []
    },
    cart() {
        if (!this.currentUser) {
        return [];
        }

        
        const userFilter = this.currentUser ? { userId: this.currentUser._id } : {};

        
        return CartCollection.find(
            userFilter,
            {
            sort: { createdAt: -1 },
            }
        ).fetch();
    },
    
    currentUser() {
        return Meteor.user();
    }
}
};
</script>
