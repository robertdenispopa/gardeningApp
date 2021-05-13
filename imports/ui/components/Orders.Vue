<template>
    <div class="app">
        <div class ="title-page">
            <h2>Orders
            <span v-if="incompleteCount > 0">({{incompleteCount}})</span>
            </h2>
            
        </div>
        <div class="main">
            <div class="filter">
                
                <button
                    v-model="hideCompleted"
                    @click="toggleHideCompleted"
                    >
                <span v-if="hideCompleted">Show All</span>
                <span v-else>Hide Completed Orders</span>
                </button>
            </div>
            <div class="loading" v-if="!$subReady.orders">Loading...</div>
            <table class="products">
                <tr>
                    <th></th>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th></th>
                </tr>
                <Order 
                class="product"
                v-for="order in orders"
                v-bind:key="order._id"
                v-bind:order="order" 
                />
                
            </table>
            <ul >
                
            </ul>
        </div>
    </div>
</template>

<script>

import Vue from "vue";

import Order from "./Order.vue";

import { OrdersCollection } from "../../api/collections/OrdersCollection.js";


export default {
    components: {
        Order
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
    'orders': []
    },
    orders() {
        if (!this.currentUser) {
        return [];
        }
    
        const hideCompletedFilter = { isChecked: { $ne: true } };
        
        const userFilter = this.currentUser ? { userId: this.currentUser._id } : {};
        
        const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
        
        return OrdersCollection.find(
            this.hideCompleted ? pendingOnlyFilter : userFilter,
            {
            sort: { createdAt: -1 },
            }
        ).fetch();
    },
    incompleteCount() {
    return OrdersCollection.find({ isChecked: { $ne: true }, userId: this.currentUser._id }).count();
    },
    currentUser() {
        return Meteor.user();
    }
}
};
</script>
