<template>
  <body class="home bg-dark vh-100">
    <!-- Landing Page -->
    <div class="container vh-100">
      <!-- First row with two columns -->
      <div class="row w-100 bg-light h-50">
        <div class="col-6 bg-secondary d-flex align-items-center justify-content-center">
          <h2 style="font-size: 2em; text-transform: uppercase;" class="hover-left">
            Aspiring
          </h2>
        </div>
        <div class="col-6 d-flex bg-light align-items-center justify-content-center">
          <h2 style="font-size: 2em; text-transform: uppercase;">
            WebDeveloper
          </h2>
        </div>
      </div>

      <!-- Second row -->
      <div class="row w-100 bg-primary h-50">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="respond-font text-primary">Carl James</h1>
          <p></p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.hover-left:hover {
  transform: translateX(-20px); /* Move 20 pixels to the left on hover */
  transition: transform 0.8s ease; /* Adjust the duration to make it slower */
}

@media (max-width: 300px) {
  .respond-font {
    font-size: 1.5em;
    text-transform: uppercase;
  }
}

.respond-font {
  -webkit-text-stroke: 1px white !important;
  font-size: 12vw;
  text-transform: uppercase;
  height: max-content;
  transition: transform 0.5s ease; /* Add transition property */
}

.respond-font:hover {
  transform: translateX(20px); /* Move 20 pixels to the right on hover */
}

::selection {
  background-color: black;
}
</style>
