<template>
  <div class=" black-background mt-5">
    <div class="row">
      <h2 class="display-2 mt-3">Resume</h2>
    </div>
    <div class="container">
      <div class="row">
        <!-- First Column -->
        <h1 class="text-white">Work History</h1>
        <div class="card-body col-md-6 black-background" v-for="(education, index) in education" :key="index">
          <h5 class="card-title">
            <h2>{{ education.place }}</h2>
            <p>{{ education.year }}</p>
            <p>{{ education.description }}</p>
          </h5>
        </div>
        <div class="logos col-md-6">
          <h1 class="text-white">Skills</h1>
        <div class="logos-slider">
          <img src="../assets/svg/javascript.svg" />
          <img src="../assets/svg/html5-2.svg" />
          <img src="../assets/svg/css-3.svg" />
          <img src="../assets/svg/github.svg" />
          <img src="../assets/svg/bootstrap.svg" />
          <img src="../assets/svg/figma-logo.svg" />
          <img src="../assets/svg/git.svg" />
          <img src="../assets/svg/javascript.svg" />
          <img src="../assets/svg/html5-2.svg" />
          <img src="../assets/svg/css-3.svg" />
          <img src="../assets/svg/github.svg" />
          <img src="../assets/svg/bootstrap.svg" />
          <img src="../assets/svg/figma-logo.svg" />
          <img src="../assets/svg/git.svg" />
        </div>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchSkills');
    let logosSlider = this.$el.querySelector(".logos-slider");

    if (logosSlider) {
      let copy = logosSlider.cloneNode(true);
      this.$el.querySelector(".logos").appendChild(copy);
    }
  },
}
</script>

<style scoped>
.container {
  padding-top: 3%;
}

body {
  background: black;
}

@keyframes slide {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  background: black;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slider {
  display: inline-block;
  animation: 100s slide infinite linear;
}

.logos-slider img {
  height: 50px;
  margin: 0 2rem;
}

.black-background {
  background-color: black;
  color: white; 
}

.text-white:hover {
    text-decoration: underline blue;
  }
</style>
