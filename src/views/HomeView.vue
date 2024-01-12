<template>
  <body class="home bg-dark vh-100 my-5">
    <!-- Landing Page -->
    <div class="container vh-100">
      <!-- First row with two columns -->
      <div class="row w-100 h-50">
        <div class="col-6 d-flex align-items-center justify-content-center text-white">
          <h2 style="font-size: 2em; text-transform: uppercase;" class="hover-left">
            Aspiring WebDeveloper
          </h2>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center my-5">
          <img
            src="https://i.postimg.cc/bwMJwsR1/IMG-7803.jpg"
            alt=""
            loading="lazy"
            class="rounded-circle img-hover img-responsive"
          />
        </div>
      </div>

      <!-- Second row -->
      <div class="row w-100 h-50">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="respond-font text-primary">Carl James</h1>
          <p></p>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
.hover-left:hover {
  transform: translateX(-20px);
  transition: transform 0.8s ease;
}

.img-hover {
  transition: transform 0.8s ease;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

.img-hover:hover {
  transform: scale(1.1);
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
  transition: transform 0.5s ease;
}

.respond-font:hover {
  transform: translateX(20px);
}

::selection {
  background-color: black;
}
</style>
