<template>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
</template>

<script> 
import FooterComponent from './components/layout/FooterComponent.vue';
import HeaderComponent from './components/layout/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }  
}
</script>

<style>
 
</style>
