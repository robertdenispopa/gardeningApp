<template>
    <div>
        <li>{{ this.product.name}}{{ this.product.description}}{{ this.product.price}}</li>
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