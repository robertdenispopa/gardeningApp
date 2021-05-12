<template>
    <div>
        <div class ="title-page">
            <h2>Products</h2>
        </div>
        <div>
            <ProductForm/>
            <ul>
                <Product 
                v-for="product in products"
                v-bind:key="product._id"
                v-bind:product="product" 
                />
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
    methods: {

    },
    meteor: {
    products() {
        return ProductsCollection.find({}, { sort: { createdAt: -1 } }).fetch();;
    }
}
};
</script>