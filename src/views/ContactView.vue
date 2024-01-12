<template>
    <section id="Contact" class="container-fluid form-layout text-white 100vh">
      <div class="container my-5">
        <h2 class="section-heading text-center text-black">Contact Section</h2>
        <h3 class="d-flex justify-content-center align-items-center mb-2">
          Contact Me
        </h3>
        <div class="row">
          <!-- Left Side Form -->
          <div class="col-lg-1"></div>
          <div class="col-lg-10">
            <div class="row">
              <!-- Left Side Contact -->
              <div class="col-md-6 colmn1">
                <h3 class="heading my-5">Have an awesome idea?</h3>
                <!-- contact form -->
                <div class="form">
                  <form
                    action="https://formspree.io/f/xpzgnpee"
                    method="POST"
                  >
                    <div class="form-group mb-4">
                      <input
                        type="text"
                        id="firstname"
                        name="Firstname"
                        class="form-control"
                        placeholder="Your name?"
                        required
                      />
                    </div>
                    <div class="form-group mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        placeholder="Your email?"
                        required
                      />
                    </div>
                    <div class="form-group mb-4">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                        placeholder="Your Subject"
                        required
                      />
                    </div>
                    <div class="form-group mb-4">
                      <textarea
                        id="message"
                        class="form-control"
                        name="message"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      class="mt-4 d-flex justify-content-center align-items-center btn btn-danger custom-red-btn"
                    >
                      Send it!
                    </button>
                  </form>
                </div   >
              </div>
              <!-- Right Side Contact -->
              <div class="col-md-6 colmn2">
                <!-- Contact Details -->
                <h2 class="heading text-center my-5"> Find Me.</h2>
                <div class="row d-flex flex-column align-items-center justify-content-center">
                  <div class="col">
                    <p>Contact Details:</p>
                  </div>
                  <div class="col">
                    <p>
                      <a href="mailto:carlmjames2@gmail.com"
                        >carlmjames2@gmail.com</a
                      >
                    </p>
                    <p>+27 69 505 5903</p>
                  </div>
                  <div class="col">
                    <h2 class="text-center mt-2">Social Links.</h2>
                    <p>
                      <a
                        href="https://github.com/Understudystudent"
                        target="_blank"
                      >
                        <i class="bi bi-github m-2" aria-hidden="true"></i>
                        Github
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/carl-james-3ab3ba276/"
                        target="_blank"
                      >
                        <i class="bi bi-linkedin m-2" aria-hidden="true"></i>
                        LinkedIn
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/carl.james.5439087/"
                        target="_blank"
                      >
                        <i class="bi bi-facebook" aria-hidden="true"></i>
                        Facebook
                      </a>
                    </p>
                    <p>
                      <i class="bi bi-globe-europe-africa" aria-hidden="true"></i>
                      Location: Newfields, Cape town, South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1 colmn1"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
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
  
  #Contact {
    background-color: black;
  }
  
  .custom-red-btn {
    background-color: red;
  }
  
  
  </style>
  