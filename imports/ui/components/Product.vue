<template>
        <tr>
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
    methods: {
        toggleChecked() {
        Meteor.call('products.setIsChecked', this.product._id, !this.product.isChecked);;
        },
        deleteThisProduct() {
        Meteor.call('products.remove', this.product._id);
    },
    addThisProduct() {
    CartCollection.insert( this.product._id,{
            createdAt: new Date() // current time
        });
    },
    }
};
</script>