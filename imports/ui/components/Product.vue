<template>
    <div>
        <li v-bind:class="productClassName">
            <input
            type="checkbox"
            readOnly
            v-bind:checked="!!this.product.checked"
            @click="toggleChecked"
            />

            <span class="text"> {{ this.product.name}}{{ this.product.description}}{{ this.product.price}} </span>

            <button class="delete" @click="deleteThisProduct">×</button>
        </li>
    </div>    
</template>

<script>
    import Vue from "vue";
    import { ProductsCollection } from "../../api/collections/ProductsCollection.js";

    export default {
    props: ["product"],
        data() {
        return {};
        },
    computed: {
        productClassName: function() {
        return this.product.checked ? "checked" : "";
        }
    },
    methods: {
        toggleChecked() {
          // Set the checked property to the opposite of its current value
    ProductsCollection.update(this.product._id, {
            $set: { checked: !this.product.checked }
    });
        },
        deleteThisProduct() {
    ProductsCollection.remove(this.product._id);
    },
    }
};
</script>