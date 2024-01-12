<template>
  <div class="container vh-100">
    <div class="row">
      <h2 class="display-2">Resume</h2>
    </div>
    <div class="container">
  <div class="row">
    <!-- Left Column -->
    <div class="col-md-6">
      <h2>Left Column</h2>
      <p>This is the content of the left column.</p>
    </div>

    <!-- Right Column -->
    <div class="col-md-6">
      <h2>Right Column</h2>
      <p>This is the content of the right column.</p>
    </div>
  </div>
</div>


    <div class="logos">
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
</template>



<script>
export default {
  computed: {
    jobTitle() {
      return this.$store.state.jobTitle;
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('fetchJobTitle');
    this.$store.dispatch('fetchSkills');
    let copy = this.$el.querySelector(".logos-slider").cloneNode(true);
    this.$el.querySelector(".logos").appendChild(copy);
  },
}
</script>

<style scoped>
.container {
  padding-top: 3%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f2f2f2;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  background: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
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
</style>
