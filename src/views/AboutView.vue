<template>
  <div>
    <h2 class="title">About Me</h2>
    <section ref="section" class="custom-section">
      <h2 class="inner-title">About Me</h2>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let value = window.scrollY;
      this.$refs.section.style.clipPath = `circle(${value * 3}px at left center)`;
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
  font-family: 'Poppins';
}


body {
  min-height: 200vh;
  background: black;
}

.custom-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(200px at left center);
  z-index: 2;
}

.title {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: aqua;
  z-index: 1;
  font-size: 20vw;
}

.inner-title {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: aqua;
  z-index: 1;
  font-size: 20vw;
  background-color: red;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
