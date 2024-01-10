<template>
  <div class="background container-fliud vh-100 d-flex align-items-center justify-content-center">
    <h1 class="title display-1 fw-bolder">About Me</h1>
    <div ref="circle" class="circle"></div>
  </div>
  <div class="continer bg-secondary vh-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore cum quasi nihil molestias exercitationem, eius provident quaerat sit incidunt. Unde autem ratione harum magnam maxime fugiat aspernatur praesentium dolore!</div>
</template>

<script>
export default {
  data(){
    return {
      value: 0
    }
  },
  mounted() {
    // let section = document.querySelector('section');
    let circle = this.$refs.circle;


    document.addEventListener('scroll', () => {
      // let value = window.scrollY;
      this.value += window.scrollY;
      console.log(this.value)
      // section.style.clipPath = `circle(${value * 3}px at left center)`;
      circle.style['padding'] = `${this.value}px`;
    });
  }
};

</script>

<style scoped>
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

.full-height {
  text-align: center;
  margin: 20px;
}

/* .title {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: aqua;
  z-index: 1;
  font-size: 20vw;
} */

section {
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

/* -------------------------------------------------------------------------- */

.background {
  background-color: white;
}

.title {
  color: black;
  font-size: 10vw;
}

.circle {
  padding: 1500px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  mix-blend-mode: difference;
}
</style>
