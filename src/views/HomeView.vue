<template>
  <body class="home bg-dark vh-100">
    <!-- Landing Page -->
    <div class="container vh-100">
      <!-- First row with two columns -->
      <div class="row w-100 bg-light h-50">
        <div class="col-6 bg-secondary d-flex align-items-center justify-content-center">
          <h2 style="font-size: 2em; text-transform: uppercase;">{{ carlData.occupation.split(' ')[0] }}</h2>
        </div>
        <div class="col-6 d-flex bg-light align-items-center justify-content-center">
          <h2 style="font-size: 2em; text-transform: uppercase;">{{ carlData.occupation.split(' ')[1] }}</h2>
        </div>
      </div>

      <!-- Second row -->
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
    fetchData() {
      fetch('https://understudystudent.github.io/vueEOMPdata/data/')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.carlData = {
            name: data.name,
            age: data.age,
            city: data.city,
            occupation: data.occupation
          };
        })
        .catch(error => console.error('Error fetching data:', error));
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
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
}

::selection {
  background-color: black;
}
</style>

