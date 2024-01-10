<template>
    <div>
      <div class="header" :style="{ fontSize: '10vw', paddingTop: '5%' }">Let's Connect</div>
      <div>
        <div v-for="(card, index) in cards" :key="index" class="card">{{ card }}</div>
      </div>
      <div class="footer">Footer</div>
  
      <!-- Added code for circles -->
      <div v-for="(circle, index) in circles" :key="index" class="circle" :style="{ left: circle.x - 12 + 'px', top: circle.y - 12 + 'px', backgroundColor: circle.color, transform: 'scale(' + circle.scale + ')' }"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: ["card 1", "card 2", "card 3", "card 4"],
        coords: { x: 0, y: 0 },
        circles: [],
        colors: [
          "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
          "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
          "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
          "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
          "#48005f", "#3d005e"
        ],
      };
    },
    mounted() {
      this.setupCircles();
      window.addEventListener("mousemove", this.handleMouseMove);
      this.animateCircles();
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
  