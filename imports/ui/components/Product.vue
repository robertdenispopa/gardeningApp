<template>
        <tr v-bind:class="productClassName">
            <td> <input
            type="checkbox"
            readOnly
            v-bind:checked="!!this.product.checked"
            @click="toggleChecked"
            /> </td>
            <td>{{ this.product.name}}</td>
            <td>{{ this.product.description}}</td>
            <td>{{ this.product.price}}</td>
            <td>
                <button class="delete" @click="deleteThisProduct">×</button>
                <button class="add" @click="addThisProduct">Add</button>
            </td>
        </tr>   
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
    addThisProduct() {
    CartCollection.insert( this.product._id,{
            createdAt: new Date() // current time
        });
    },
    }
};
</script>