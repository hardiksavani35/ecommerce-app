export default {
    namespaced: true, 
    state() {
        return {
            cart: 0,
            cartItems: []  
        };
    },
    mutations: {
        addToCart(state, { product, qty }) {
            state.cartItems.push({ ...product, total: product.price * qty, quantity: qty });
            state.cart++;
        }
    },
    actions: {
        addToCart({ commit, state }, { product, qty }) {
            const itemExists = state.cartItems.find(item => item.id == product.id);
            if (!itemExists) {
                commit('addToCart', { product, qty });
                return true;
            }
            return false;
        }
    },
    getters: {
        cart(state) {
            return state.cart;
        },
        cartItems(state) {
            return state.cartItems;  
        }
    }
};