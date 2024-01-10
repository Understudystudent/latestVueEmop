<template>
  <div>
    <main class="bg-dark">
      <router-view />
    </main>
    
    <NavBar />
    <FooterView />
    <AnimatedCircles />
  </div>

</template>

<script>
import FooterView from './components/FooterView.vue';
import NavBar from './components/NavBar.vue';


export default {
  components: {
    NavBar,
    FooterView,
  },
};
</script>

<style src="@/assets/css/style.css"></style>
