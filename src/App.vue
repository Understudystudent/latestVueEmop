<template>
  <SpinnerComp :loading="loading"/>
  <div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    
    <NavBar />
    <FooterView />
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavBar from './components/NavBar.vue';
import SpinnerComp from './components/Spinner.vue';


export default {
  data(){
    return {
      loading: false
    }
  },
  components: {
    NavBar,
    FooterView,
    SpinnerComp
  },
  mounted(){
    window.onload = () => {
      setTimeout(() => {
        this.loading = true;
      }, 2000);
    }
  }
};
</script>

<style src="@/assets/css/style.css"></style>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@800&display=swap');

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
