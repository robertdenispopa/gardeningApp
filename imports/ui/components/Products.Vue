<template>
    <div class="app">
        <div class ="title-page">
            <h2>Products</h2>
            
        </div>
        <div class="main">
            <ProductForm/>
            <div class="filter">
                <span v-if="incompleteCount > 0">({{incompleteCount}})</span>
                <button
                    v-model="hideCompleted"
                    @click="toggleHideCompleted"
                    >
                <span v-if="hideCompleted">Show All</span>
                <span v-else>Hide Completed Orders</span>
                </button>
            </div>

            <table >
                <tr>
                    <th></th>
                    <th> Name </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th></th>
                </tr>
                <Product 
                class="product"
                v-for="product in products"
                v-bind:key="product._id"
                v-bind:product="product" 
                />
                
            </table>
            <ul >
                
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue";

import Product from "./Product.vue";
import ProductForm from "./ProductForm.vue";

import { ProductsCollection } from "../../api/collections/ProductsCollection.js";


export default {
    components: {
        Product,
        ProductForm
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
    'products': []
    },
    products() {
        if (!this.currentUser) {
        return [];
        }
    
        const hideCompletedFilter = { isChecked: { $ne: true } };
        
        const userFilter = this.currentUser ? { userId: this.currentUser._id } : {};
        
        const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
        
        return ProductsCollection.find(
            this.hideCompleted ? pendingOnlyFilter : userFilter,
            {
            sort: { createdAt: -1 },
            }
        ).fetch();
    },
    incompleteCount() {
    return ProductsCollection.find({ isChecked: { $ne: true }, userId: this.currentUser._id }).count();
    },
    currentUser() {
        return Meteor.user();
    }
}
};
</script>