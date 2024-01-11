<template>
    <div class="home">
      <h1 class="Project">Previous Work</h1>
      <ProductCard />
    </div>
  </template>
  
  <script>
  import ProductCard from '@/components/ProjectWork.vue';
  export default {
    components: { ProductCard },
  
  }
  </script>
  
  <style scoped>
  .home {
    padding-top: 5%;
    text-decoration: none;

  }
  </style>
  