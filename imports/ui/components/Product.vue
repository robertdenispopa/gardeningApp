<template>
    <div>
        <li>{{ this.product.name }}</li>
        <li>{{ this.product.description }}</li>
        <li>{{ this.product.price }}</li>
    </div>    
</template>

<script>
    export default {
        props: ["product"],
        data() {
        return {};
    }
};
</script>