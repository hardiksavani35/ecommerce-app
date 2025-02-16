<template>
    <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold">Cart</h1> 
        <table class="table table-bordered text-center align-middle">
            <thead class="table-dark">
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td>
                        <img :src="item.url" class="img-thumbnail" :alt="item.title" width="60">
                    </td>
                    <td>{{ item.title }}</td>
                    <td>${{ item.price.toFixed(2) }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="removeItem(item.id)">
                            <i class="bi bi-trash"></i> Remove
                        </button>
                    </td>
                </tr>
                <tr v-if="cart.length == 0">
                    <td colspan="6" class="text-center text-muted">No items in cart.</td>
                </tr>
            </tbody>
            <tfoot v-if="cart.length > 0">
                <tr>
                    <td colspan="4" class="text-end"><strong>Grand Total:</strong></td>
                    <td><strong>${{ grandTotal.toFixed(2) }}</strong></td>
                    <td><button class="btn btn-secondary">Checkout</button></td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        cart() {
            return this.$store.getters['cart/cartItems'];
        },
        grandTotal() {
            return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    },
    methods: {
        updateQuantity(item) {
            this.$store.dispatch('cart/updateCartQuantity', item);
        }, 
        removeItem(id) { 
            this.$store.dispatch('cart/removeItem', id);
        }
    }
}
</script>