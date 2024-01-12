<template>
    <div class="home black-background">
        <h1 class=" testimonials">Testimonials</h1>
        <SocialCard />
    </div>
</template>

<script>
  import SocialCard from '@/components/SoicalProof.vue';
export default {
    components: { SocialCard }
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
    .testimonials {
        font-size: 3rem;
        background-color:  #e2e3e5;

    }
}
.black-background {
  background-color:  #e2e3e5;
  color: black; 
}

.home{
    padding-top:5%
}
</style>