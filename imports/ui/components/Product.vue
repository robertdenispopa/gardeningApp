<template>
        <tr>
            <td>{{ this.product.name}}</td>
            <td>{{ this.product.description}}</td>
            <td>{{ this.product.price}}</td>
            <td v-if="currentUser.profile.usertype == 'Seller'||'admin'">
                <button class="delete" @click="deleteThisProduct">×</button>
            </td>
            <td v-if="currentUser.profile.usertype == 'Buyer'||'admin'">
                <button class="add" @click="addThisProduct" >Add</button>
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
    
        Meteor.call('cart.insert', {
            productId:this.product._id,
            username:this.currentUser._id,
            address:this.currentUser.profile.address,
            createdAt: new Date()
            });
    },
    },
    meteor:{
        currentUser() {
            return Meteor.user(); 
            }
    }
};
</script>