<template>
  <div class="container black-background">
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="card mb-3">
          <img :src="testimonial.profile" class="card-img-top" :alt="`${testimonial.name} ${testimonial.surname}`" loading="lazy" id="imgtop">
          <div class="card-body">
            <h5 class="card-title">{{ `${testimonial.name} ${testimonial.surname}` }}</h5>
            <p class="card-text">{{ testimonial.quotes }}</p>
          </div>
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
  width: 100%;
}

.card-img-top {
  aspect-ratio: 1/1;
  height: 100%;
  object-fit: cover;
}

.black-background {
  background-color: black;
  color: white; 
}



</style>
