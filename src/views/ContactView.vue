<template>
  <div>
    <div class="header" :style="{ fontSize: '10vw', paddingTop: '5%' }" ref="header"></div>
    <div>
      <div v-for="(card, index) in cards" :key="index" class="card">{{ card }}</div>
    </div>
    <!-- <div class="footer">
      <a href="https://github.com/yourgithubusername" target="_blank">
        <i class="bi bi-github" style="margin-right: 0.5rem;"></i>
      </a>
      <a href="https://linkedin.com/in/yourlinkedinusername" target="_blank">
        <i class="bi bi-linkedin" style="margin-right: 0.5rem;"></i>
      </a>
    </div> -->

    <!-- Circles mouse -->
    <div v-for="(circle, index) in circles" :key="index" class="circle" :style="{ left: circle.x - 12 + 'px', top: circle.y - 12 + 'px', backgroundColor: circle.color, transform: 'scale(' + circle.scale + ')' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: ["Looking for your next Developer", "card 2"],
      coords: { x: 0, y: 0 },
      circles: [],
      colors: [
        "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
        "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
        "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
        "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
        "#48005f", "#3d005e"
      ],
      typewriterText: "Let's Connect",
    };
  },
  mounted() {
    this.setupCircles();
    window.addEventListener("mousemove", this.handleMouseMove);
    this.animateCircles();

    // Start the typewriter effect
    this.typeWriter();
  },
  methods: {
    setupCircles() {
      this.circles = this.colors.map((color, index) => ({
        x: 0,
        y: 0,
        color,
        scale: (this.colors.length - index) / this.colors.length,
      }));
    },
    handleMouseMove(e) {
      this.coords.x = e.clientX;
      this.coords.y = e.clientY;
    },
    animateCircles() {
      let x = this.coords.x;
      let y = this.coords.y;

      this.circles.forEach((circle, index) => {
        circle.x = x;
        circle.y = y;

        const nextCircle = this.circles[index + 1] || this.circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(this.animateCircles);
    },
    typeWriter() {
      let i = 0;
      const txt = this.typewriterText;
      const speed = 50;

      const typeWriterInterval = setInterval(() => {
        if (i < txt.length) {
          this.$refs.header.innerHTML += txt.charAt(i);
          i++;
        } else {
          clearInterval(typeWriterInterval);
        }
      }, speed);
    },
  },
};
</script>
  
  <style scoped>
  body {
      font-family: 'Courier New', Courier, monospace;
  }
  
  .header,
  .footer {
      background-color: black;
      color: white;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .card {
      width: 100vw;
      height: 100vh;
      background-color: var(--card-bg-color);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 0;
  }
  
  .circle {
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 99999999;
  }
  </style>
  