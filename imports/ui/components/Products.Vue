<template>
    <div>
        <div class ="title-page">
            <h2>Products</h2>
        </div>
        <div>
            <ul>
                <Product 
                v-for="product in getProducts()"
                v-bind:key="product._id"
                v-bind:product="product"/> 
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Product from "./Product.vue";

export default {
    components: {
        Product
    },
    data() {
        return {};
    },
    methods: {
    getProducts() {
    return [
        { _id: 1, name: "Produs 1", description:" descriere smechera ", price: 100},
        { _id: 2, name: "Produs 2", description:" descriere smechera ", price: 120},
        { _id: 3, name: "Produs 3", description:" descriere smechera ", price: 130}
    ];
    }
    }
};
</script>