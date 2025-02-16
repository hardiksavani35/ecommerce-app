<template>
    <Loader :visible="loading" />
    <div>
        <!-- Page Header -->
        <div class="px-4 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold">Product List</h1>
        </div>

        <!-- Product List -->
        <div class="container mb-5">
            <div class="row">
                <div class="col-md-3">
                    <div class="sticky-top" style="top: 80px;">
                        <h4 class="fw-bold">Filters</h4>
                        <!-- Filter options (You can add your filter options here) -->
                        <div class="mb-3">
                            <label for="category" class="form-label">Category</label>
                            <select id="category" class="form-select" v-model="selectedCategory">
                                <option value="">Select Category</option>
                                <option v-for="category in categories" :key="category" :value="category">{{category}}</option> 
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <select id="price" class="form-select" v-model="selectedPriceOrder">
                                <option value="">Default</option>
                                <option option="lowtohigh">Low to High</option> 
                                <option option="hightolow">High to Low</option> 
                            </select>
                        </div>
                        <!-- Add more filters as needed -->
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col-md-4" v-for="product in products" :key="product.id">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h6 class="my-0 fw-normal">{{ product.title }}</h6>
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
        </div>
    </div>
</template>

<script>
import Loader from '../components/layout/LoaderComponent.vue';

export default {
    components: {Loader},
    data() {
        return {
            //loading: true,
            selectedCategory: "",
            selectedPriceOrder: "" 
        }
    },
    computed: {
        products() {
            let productsData = this.$store.getters['products/products'];
            
            if (this.selectedCategory) {
                productsData = productsData.filter(product => product.category === this.selectedCategory);
            }

            return productsData;
        },
        categories() {
            return this.$store.getters['products/getCategories']; 
        }
    }, 
}
</script>

<style scoped>
.text-start { font-size: 20px; font-weight: 700; }
.text-end { text-align: right; }
</style>