export default {
    namespaced: true, 
    state() {
        return {
            products: [
                { id: 1, title: "Zipper Repair Kit", url: "/products/product.jpg", price: 10.25, description: "Zipper Repair Kit Zipper Head for Clothing Bags Universal Zipper Repair Kit", category: "Bag" },
                { id: 2, title: "Zipper Pull Replacement Metal", url: "/products/product.jpg", price: 15.50, description: "Another test description", category: "Bag" },
                { id: 3, title: "Luggage Label (1 PCS)", url: "/products/product.jpg", price: 20.75, description: "Luggage Label Luggage Tags Suitcase Tags Name Tags for Bags", category: "Safety Products" },
                { id: 4, title: "Document Organizer Bag", url: "/products/product.jpg", price: 25.00, description: "Document Organizer Bag Multilayer Travel File Organiser Waterproof Document Storage Bag", category: "Bag" },
                { id: 5, title: "Laptop Backpack", url: "/products/product.jpg", price: 25.00, description: "A cool laptop backpack", category: "Summer Class" },
                { id: 6, title: "Casual T-Shirt for Men", url: "/products/product.jpg", price: 5.00, description: "Slim-fitting style, t-shoty for men", category: "Summer Class" },
                { id: 7, title: "Mens Cotton Jacket", url: "/products/product.jpg", price: 20.25, description: "Great outerwear jackets for spring, autumn, or winter.", category: "Home Decor" },
                { id: 8, title: "Mens Casual Slim Fit 2", url: "/products/product.jpg", price: 15.50, description: "An aweome shirt for men", category: "Wallpaper" },
                { id: 9, title: "Women's Gold & Silver Bracelet", url: "/products/product.jpg", price: 2.75, description: "A very cool bracelet.", category: "Wallpaper" },
                { id: 10, title: "Solid Gold Petite Micropave", url: "/products/product.jpg", price: 25.00, description: "A very cool jewlery for women", category: "Bag" },
                { id: 11, title: "White Gold Plated Princess", url: "/products/product.jpg", price: 9.99, description: "A great diamond engagement ring for her.", category: "Safety Products" },
                { id: 12, title: "Gold-plated Earrings", url: "/products/product.jpg", price: 10.99, description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.", category: "Home Decor" },
            ], 
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