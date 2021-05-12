<template>
    <div>
        <header>
            <h2>Products</h2>
        </header>
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
        { _id: 1, name: "Produs 1", description:" 1 ", price: 100},
        { _id: 2, name: "Produs 2", description:" 1 ", price: 120},
        { _id: 3, name: "Produs 3", description:" 1 ", price: 130}
    ];
    }
    }
};
</script>