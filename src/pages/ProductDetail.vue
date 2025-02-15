<template>
    <div class="container mb-3 pt-4">
        <div v-if="product" class="row">
            <div class="col-md-6">
                <img :src="product.url" class="img-fluid" :alt="product.title">
            </div>
            <div class="col-md-6">
                <h2>{{ product.title }}</h2>
                <p><strong>Price:</strong> {{ product.price }}$</p>
                <p>{{ product.description }}</p>
                <div>
                    <input type="number" class="form-control" name="qty" v-model="qty" min="1" />
                </div>
                <div>
                    <button class="btn btn-primary mt-3" @click="addToCart">Add to Cart</button>
                    <p v-if="message" class="text-danger mt-2">{{ message }}</p>
                </div>                
            </div>
        </div>
        <p v-else class="text-danger text-center">Product not found.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qty:1, 
            message: ''
        }
    },
    computed: {
        product() {
            const id = Number(this.$route.params.id);
            return this.$store.getters['products/productById'](id);
        }
    },
    methods: {
        async addToCart() {
            this.message = "";
            if (this.product) {
                const success = await this.$store.dispatch('cart/addToCart', { product: this.product, qty: this.qty });
                if (!success) {
                    this.message = 'This product is already in the cart.';
                }
            }
        }
    }
}
</script>

<style scoped>
    input.form-control { width: 20% }
</style>