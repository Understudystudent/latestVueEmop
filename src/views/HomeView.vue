<template>
  <body class="home bg-dark vh-100">
    <div class="container vh-100">
      <!-- First row with two columns -->
      <div class="row w-100 bg-light h-50">
        <div class="col-6 bg-secondary d-flex align-items-center justify-content-center">
          <h2>{{ carlData.occupation.split(' ')[0] }}</h2>
        </div>
        <div class="col-6 d-flex bg-dark align-items-center justify-content-center">
          <h2>{{ carlData.occupation.split(' ')[1] }}</h2>
        </div>
        <!-- Second row -->
      </div>
      <div class="row w-100 bg-primary h-50">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="respond-font text-primary">{{ carlData.name }}</h1>
        </div>
      </div>
    </div>
  </body>
</template>


<script>
export default {
  data() {
    return {
      carlData: {
        name: "Carl James",
        age: 24,
        city: "Cape Town",
        occupation: "Aspiring WebDeveloper"

      },
      jsonData: "",
    };
  },
  methods: {
    saveToJson() {
      this.jsonData = JSON.stringify(this.carlData, null, 2);
    },
  },
};
</script>

<style scoped>
  @media (max-width: 300px) {
    .respond-font {
      font-size: 1.5em;
      
    }
  }
  .respond-font {
    -webkit-text-stroke: 1px white !important;
  }
</style>
