<template>
    <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <h3 class="fw-bold">eCommerce App</h3>
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li> 
              <router-link :to="{ name: 'home' }" class="nav-link text-secondary">Home</router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'products' }" class="nav-link text-secondary">Products</router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'cart' }" class="nav-link text-secondary">Cart <b>[{{ this.$store.getters['cart/cart'] }}]</b></router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'contact' }" class="nav-link text-secondary">Contact Us</router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'login' }" class="nav-link text-secondary">Login</router-link>
            </li> 
            <li> 
              <router-link :to="{ name: 'register' }" class="nav-link text-secondary">Register</router-link>
            </li>  
          </ul>
        </div>
      </div>
    </div> 
  </header>
</template>