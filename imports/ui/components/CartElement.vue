<template>
        <tr>
            <td>{{ this.cartElement.name}}</td>
            <td>{{ this.cartElement.description}}</td>
            <td>{{ this.cartElement.price}}</td>
        </tr>   
</template>

<script>
    import Vue from "vue";
    import { CartCollection } from "../../api/collections/CartCollection.js";

    export default {
    props: ["cartElement"],
        data() {
        return {};
        },
    computed: {
        
    },
    methods: {
    }
};
</script>