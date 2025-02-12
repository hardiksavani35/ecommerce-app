<template>
    <div class="container mb-3 pt-4">
        <div v-if="product" class="row">
            <div class="col-md-6">
                <img :src="product.url" width="100%" alt="product.title">
            </div>
            <div class="col-md-6">
                <h2>{{ product.title }}</h2>
                <p><strong>Price:</strong> {{ product.price }}$</p>
                <p>{{ product.description }}</p>
                <button class="btn btn-primary">Add to cart</button>
            </div>
        </div>
        <p v-else class="text-danger">Product not found.</p>
    </div>
</template>

<script>
export default {
    computed: {
        product() {
            const id = Number(this.$route.params.id);
            return this.$store.getters['products/productById'](id);
        }
    }
}
</script>