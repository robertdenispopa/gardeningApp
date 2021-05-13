<template>
    <div class="app">
        <div class ="title-page">
            <h2>Products</h2>
        </div>
        <div class="main">
            <ProductForm/>
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
        return {};
    },
    methods: {},
    meteor: {
    products() {
        return ProductsCollection.find({}, { sort: { createdAt: -1 } }).fetch();;
    }
}
};
</script>