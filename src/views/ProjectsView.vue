<template>
  <div class="home black-background">
    <h1 class="Project text-white" style="text-transform: uppercase;">Previous Work</h1>
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
.black-background {
  background-color: black;
  color: white; 
}
</style>
