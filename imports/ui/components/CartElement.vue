<template>
        <tr>
            <td>{{ this.car.name}}</td>
            <td>{{ this.car.description}}</td>
            <td>{{ this.car.price}}</td>
            <td><button class="delete" @click="deleteThisElement">×</button></td>
        </tr>   
</template>

<script>
    import Vue from "vue";
    import { CartCollection } from "../../api/collections/CartCollection.js";

    export default {
    props: ["car"],
        data() {
        return {};
        },
    computed: {
        
    },
    methods: {
        deleteThisElement() {
        Meteor.call('cart.remove', this.car._id);
    }
    }
};
</script>