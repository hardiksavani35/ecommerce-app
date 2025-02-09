import { createWebHistory, createRouter } from 'vue-router'
 
const HomePage = () => import('./pages/HomePage.vue');
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import ProductList from './pages/ProductList.vue';
import ProductDetail from './pages/ProductDetail.vue';
import ProductEnquiry from './pages/ProductEnquiry.vue';
import CartPage from './pages/CartPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFound from './pages/NotFound.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/register', name: 'register', component: RegisterPage },
  { path: '/products', name: 'products', component: ProductList },
  { path: '/product/:id', name: 'product-details', component: ProductDetail, children: [ {
    path: '/enquiry', name: 'product-enquiry', component: ProductEnquiry
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