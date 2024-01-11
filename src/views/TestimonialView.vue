<template>
    <div class="home">
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
    }
}
h1{
    margin-top: 10%;
}
</style>