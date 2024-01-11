<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card" v-for="(testimonial, index) in testimonials" :key="index" style="width: 25rem;">
        <img :src="testimonial.profile" class="card-img-top" :alt="`${testimonial.name} ${testimonial.surname}`" loading="lazy">
        <div class="card-body">
          <h5 class="card-title">{{ `${testimonial.name} ${testimonial.surname}` }}</h5>
          <p class="card-text">{{ testimonial.quotes }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  }
}
</script>

<style scoped>
.card {
  margin: 2rem;
  width: 25rem;
}

.card-img-top {
  aspect-ratio: 1/1;
}
</style>
