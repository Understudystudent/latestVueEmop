<template>
    <div class="container black-background ">
      <div class="row justify-content-center">
        <div class="card black-background text-white" v-for="project in projects" style="width: 17rem;" :key="project.id">
          <img :src="project.image" class="card-img-top grayscale-on-hover" :alt="project.name" loading="lazy" style="height: 15rem; object-fit: cover;">
          <div class="card-body black-background ">
            <h5 class="card-title black-background">
              <a :href="project.netlify" target="_blank" class="project-name">{{ project.name.toUpperCase() }}</a>
            </h5>
            <a :href="project.netlify" target="_blank"><button class="btn btn-primary">Visit Site</button></a>
            <a :href="project.gitHub" target="_blank"><button class="btn btn-secondary">GitHub</button></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      projects() {
        return this.$store.state.projects;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProjects');
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 0;
    margin: 2rem;
  }
  
  button {
    border-radius: 0.5rem;
    margin: 5%;
  }
  
  .grayscale-on-hover {
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out;
  }
  
  .grayscale-on-hover:hover {
    filter: grayscale(0%);
  }

  .project-name {
  text-decoration: none;
  transition: text-decoration 0.3s ease-in-out;
  color: white;
}

.project-name:hover {
  text-decoration: underline;
  color: white;
}
.black-background {
  background-color: black;
  color: white; 
}
  </style>
  