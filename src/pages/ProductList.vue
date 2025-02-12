<template>
    <div>
        <!-- Page Header -->
        <div class="px-4 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold">Product List</h1>
        </div>

        <!-- Product List -->
        <div class="container pb-5 mb-3">
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col-md-4" v-for="product in products" :key="product.id">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{{ product.title }}</h4>
                        </div>
                        <div class="card-body">
                            <img :src="product.url" width="100%" alt="Product Image">
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <p class="text-start">{{ product.price }}$</p>
                            <p class="text-end">
                                <router-link :to="{ name: 'product-details', params: { id: product.id } }">
                                    Details
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters['products/products'];
        }
    }
}
</script>

<style scoped>
.text-start { font-size: 20px; font-weight: 700; }
.text-end { text-align: right; }
</style>