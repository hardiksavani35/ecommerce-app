import { createWebHistory, createRouter } from 'vue-router'
 
//Lazy Loading for All Routes
const HomePage = () => import('./pages/HomePage.vue');
const LoginPage = () => import('./pages/LoginPage.vue');
const RegisterPage = () => import('./pages/RegisterPage.vue');
const ProductList = () => import('./pages/ProductList.vue');
const ProductDetail = () => import('./pages/ProductDetail.vue');
const ProductEnquiry = () => import('./pages/ProductEnquiry.vue');
const CartPage = () => import('./pages/CartPage.vue');
const ContactPage = () => import('./pages/ContactPage.vue');
const NotFound = () => import('./pages/NotFound.vue');

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage },
  { path: '/products', name: 'products', component: ProductList },
  { path: '/product/:id', name: 'product-details', component: ProductDetail, children: [ {
    path: 'enquiry', name: 'product-enquiry', component: ProductEnquiry
  }] },
  { path: '/cart', name: 'cart', component: CartPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/:notFound(.*)', name: 'not-found', component: NotFound },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;