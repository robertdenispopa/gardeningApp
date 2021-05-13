<template>
    <form class="product-form" @submit.prevent="handleSubmit">
    <input
        type="text"
        placeholder="Name..."
        v-model="newName"
    />
    <input
        type="text"
        placeholder="Description..."
        v-model="newDescription"
    />
    <input
        type="text"
        placeholder="Price..."
        v-model="newPrice"
    />
    <button type="submit">Add Product</button>
    </form>
</template>

<script>
    import Vue from "vue";
    import { ProductsCollection } from "../../api/collections/ProductsCollection.js";

    export default {
    data() {
        return {
        newName: "",
        newDescription:"",
        newPrice: ""
        }
    },
    methods: {
    handleSubmit(event) {
        ProductsCollection.insert({
            name: this.newName,
            description: this.newDescription,
            price: this.newPrice,
            createdAt: new Date() // current time
        });

      // Clear form
        this.newName = "";
        this.newDescription = "";
        this.newPrice = "";
}
},
}
</script>