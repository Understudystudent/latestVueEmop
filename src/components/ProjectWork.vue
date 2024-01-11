<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card" v-for="name in projects" style="width: 15rem;" :key="name.id">
                <img :src="name.image" id="image" class="card-image-top" :alt="projects.name" loading="lazy">
                <div class="card-body">
                    <h5 class="card-head">
                        {{ name.name }}
                    </h5>
                    <a :href="name.netlify" target="_blank"><button class="btn btn-primary">Visit Site</button></a>
                    <a :href="name.gitHub" target="_blank"><button class="btn btn-secondary">GitHub</button></a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped>
.card {
    border: 0;
    margin: 2rem;
    width: 17rem !important;
}
#image {
    aspect-ratio: 1/1;
}

button {
    border-radius: 0.5rem;
    margin: 5%;
}
</style>