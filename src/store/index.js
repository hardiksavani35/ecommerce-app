import { createStore } from 'vuex'

import product from './modules/product.js';

const store = createStore({
    modules: {
        products: product
    }
});

export default store;