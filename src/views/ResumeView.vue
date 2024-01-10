<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Resume</h2>
        <div>
          <h3>{{ jobTitle }}</h3>
          <div>
            <!--  Education Section -->
            <h4>Education</h4>
            <ul>
              <li v-for="edu in education" :key="edu.id">
                <p>{{ edu.degree }} - {{ edu.school }}, {{ edu.year }}</p>
              </li>
            </ul>          
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'ResumePage',
    computed: {
      ...mapState(['Jobtitle', 'about', 'education', 'skills', 'testimonials', 'projects']),
      jobTitle() {
        return this.Jobtitle;
      },
    },
    methods: {
      ...mapActions(['fetchJobTitle']),
    },
    created() {
      this.fetchJobTitle();
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding-top: 3%;
  }
  </style>
  