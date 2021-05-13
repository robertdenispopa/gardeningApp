<template>
        <tr v-bind:class="orderClassName">
            <td> <input
            type="checkbox"
            readOnly
            v-bind:checked="!!this.order.checked"
            @click="toggleChecked"
            /> </td>
            <td>{{ this.order.name}}</td>
            <td>{{ this.order.description}}</td>
            <td>{{ this.order.price}}</td>
        </tr>   
</template>

<script>
    import Vue from "vue";
    import { OrdersCollection } from "../../api/collections/OrdersCollection.js";

    export default {
    props: ["order"],
        data() {
        return {};
        },
    computed: {
        orderClassName: function() {
        return this.order.checked ? "checked" : "";
        }
    },
    methods: {
        toggleChecked() {
        Meteor.call('orders.setIsChecked', this.order._id, !this.order.isChecked);
        },
    }
};
</script>