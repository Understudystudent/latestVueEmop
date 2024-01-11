<template>
    <div class="home black-background mb-5">
        <h1 class=" testimonials my-5">Testimonials</h1>
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
        background-color: black;

    }
}
.black-background {
  background-color: black;
  color: white; 
}
</style>