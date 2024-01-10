<template>
    <div class="text-center">
      <nav class="navbar  navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <!-- Use router-link for the navbar-brand to redirect to the home page -->
          <router-link to="/" class="navbar-brand fs-4" style="text-decoration: none; color: black;">&#169;</router-link>        
          <!-- Single Toggle Button -->
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
  
          <!-- Navbar Links -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="text-dark" style="text-decoration: none; margin-right: 10px;">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="text-dark" style="text-decoration: none; margin-right: 10px;">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/resume" class="text-dark" style="text-decoration: none; margin-right: 10px;">Resume</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/projects" class="text-dark" style="text-decoration: none; margin-right: 10px;">Project</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/testimonial" class="text-dark" style="text-decoration: none; margin-right: 10px;">Testimonial</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="text-dark" style="text-decoration: none; margin-right: 10px;">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
    
  </script>
  
  <style scoped>
    
    /* Burger Menu */
    .toggler-icon {
      width: 30px;
      height: 3px;
      background-color: blue;
      display: block;
      transition: all 0.2s;
    }
  
    .middle-bar {
      margin: 5px auto;
    }
  
    /* Open Burger */
    .navbar-toggler .top-bar {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }
  
    .navbar-toggler .middle-bar {
      opacity: 0;
      filter: alpha(opacity=0);
    }
  
    .navbar-toggler .bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
    /* Open Burger */
  
    /* When it's an X */
    .navbar-toggler.collapsed .top-bar {
      transform: rotate(0);
    }
  
    .navbar-toggler.collapsed .middle-bar {
      opacity: 1;
      filter: alpha(opacity=100);
    }
  
    .navbar-toggler.collapsed .bottom-bar {
      transform: rotate(0);
    }
    /* When it's an X */
  
    /* Color of Toggler when collapsed */
    .navbar-toggler.collapsed .toggler-icon {
      background-color: red;
    }
  </style>