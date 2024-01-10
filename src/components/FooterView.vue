<template>
    <div class="container">
      <a href="https://github.com/Understudystudent" target="_blank">
        <i class="bi bi-github" style="font-size: 2rem; margin-right: 1rem;"></i>
      </a>
      <a href="https://www.linkedin.com/in/carl-james-3ab3ba276/" target="_blank">
        <i class="bi bi-linkedin" style="font-size: 2rem; margin-right: 1rem;"></i>
      </a>
      <p class="lead" style="font-size: 0.8rem;">
        &copy; <span> {{ currYear }}</span>
        Carl James. All rights reserved.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style scoped></style>
  