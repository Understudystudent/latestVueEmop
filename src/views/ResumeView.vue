<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Resume</h2>
    </div>
    <div class="row" v-if="jobTitle">
      <p class="lead" v-for="job in jobTitle" :key="job.title">{{ job.title }}</p>
    </div>
    <div class="row" v-if="skills">
      <h3 class="display-3">Skills</h3>
      <div v-for="skill in skills" :key="skill.title">
        <h4>{{ skill.title }}</h4>
        <p>{{ skill.experience }}</p>
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
  }
}
</script>

<style scoped>
.container {
  padding-top: 3%;
}
</style>
