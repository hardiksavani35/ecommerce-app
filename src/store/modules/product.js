export default {
    namespaced: true, 
    state() {
        return {
            products: [
                { id: 1, title: "Product 1", url: "/products/product.jpg", price: 10.25, description: "Test description" },
                { id: 2, title: "Product 2", url: "/products/product.jpg", price: 15.50, description: "Another test description" },
                { id: 3, title: "Product 3", url: "/products/product.jpg", price: 20.75, description: "Yet another test description" },
                { id: 4, title: "Product 4", url: "/products/product.jpg", price: 25.00, description: "Fourth product description" },
                { id: 5, title: "Product 4", url: "/products/product.jpg", price: 25.00, description: "Fourth product description" },
                { id: 6, title: "Product 4", url: "/products/product.jpg", price: 25.00, description: "Fourth product description" },
            ]
        }
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    getters: {
        products (state) {
            return state.products;
        },
        productById: (state) => (id) => {
            return state.products.find(product => product.id === id);
        },
        productsByPrice: (state) => (min, max) => {
            return state.products.filter(product => product.price >= min && product.price <= max);
        },
        totalProducts: (state) => {
            return state.products.length;
        },
        hasProducts: (state) => {
            return state.products && state.products.length > 0;
        }
    }
}