<template>
  <div class="black-background vh-100">
    <header class="header text-white "> Contact me</header>
    <section id="Contact" class="container-fluid form_layout  black-background">
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                    <div class="row">
                        <!-- Left Side Contact -->
                        <div class="col-md-6 colmn1">
                            <h3 class="heading my-5">Have an awesome idea?</h3>
                            <!-- contact form -->
                            <div class="form">
                                <form @submit.prevent="submitForm">
                                    <div class="form-group mb-4">
                                        <input v-model="formData.firstname" type="text" class="form-control"
                                            placeholder="Your name?" required>
                                    </div>
                                    <div class="form-group mb-4">
                                        <input v-model="formData.email" type="email" class="form-control"
                                            placeholder="Your email?" required>
                                    </div>
                                    <div class="form-group mb-4">
                                        <input v-model="formData.subject" type="text" class="form-control"
                                            placeholder="Your Subject" required>
                                    </div>
                                    <div class="form-group mb-4">
                                        <textarea v-model="formData.message" class="form-control" placeholder="Your message"
                                            required></textarea>
                                    </div>
                                    <button
                                        class="mt-4 d-flex justify-content-center align-items-center btn btn-secondary">Send
                                        it!</button>
                                </form>
                            </div>
                        </div>
                        <!-- Right Side Contact -->
                        <div class="col-md-6 colmn2 text-right align-self-end">
                            <h2 class="heading text-center my-5"> Find Me.</h2>
                            <div class="row d-flex flex-column align-items-center justify-content-center">
                                <div class="col">
                                    <p>Contact Details:</p>
                                </div>
                                <div class="col">
                                    <p><a :href="'mailto:' + formData.email">{{ formData.email }}</a></p>
                                    <p>{{ formData.phone }}</p>
                                </div>
                                <div class="col">
                                    <h2 class="text-center mt-2">Social Links.</h2>
                                    <p><a :href="socialLinks.github" target="_blank"><i class="bi bi-github m-2"></i>
                                            Github</a></p>
                                    <p><a :href="socialLinks.linkedin" target="_blank"><i class="bi bi-linkedin m-2"></i>
                                            LinkedIn</a></p>
                                    <p><a :href="socialLinks.facebook" target="_blank"><i class="bi bi-facebook"></i>
                                            Facebook</a></p>
                                    <p><i class="bi bi-globe-europe-africa"></i> Location: {{ location }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-1 colmn1"></div>
            </div>
        </div>
    </section>
  </div>

</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                firstname: 'Carl',
                email: '',
                subject: '',
                message: '',
            },
            socialLinks: {
                github: 'https://github.com/Understudystudent',
                linkedin: 'https://www.linkedin.com/in/carl-james-3ab3ba276/',
                facebook: 'https://www.facebook.com/carl.james.5439087/',
            },
            location: 'Newfields, Cape town, South Africa',
        };
    },
    methods: {
        async submitForm() {
            try {
                // Simulate sending data to a server
                const response = await this.$axios.post('/api/contact', this.formData);

                // Assuming the server responds with a success message
                console.log('Form submitted successfully:', response.data);

                // Clear the form
                this.clearForm();
            } catch (error) {
                console.error('Error submitting form:', error.message);
                // Handle errors and provide feedback to the user
            }
        },
        clearForm() {
            // Clear form fields
            this.formData.firstname = '';
            this.formData.email = '';
            this.formData.subject = '';
            this.formData.message = '';
        },
    },
};
</script>
  
<style>
.header {
    padding-top: 5%;
    font-size: 2rem; 
}
.black-background {
    background-color: black;
    color: white;
}
</style>

  