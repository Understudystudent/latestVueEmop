<template>
    <div>
      <div class="header" :style="{ fontSize: '10vw', paddingTop: '5%' }">Let's Connect</div>
      <div>
        <div v-for="(card, index) in cards" :key="index" class="card">{{ card }}</div>
      </div>
      <div class="footer">Footer</div>
    </div>
  </template>
  
<script>
export default {
    data() {
        return {
            cards: ["card 1", "card 2", "card 3", "card 4"],
        };
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

:root {
    --card-bg-color: rgb(255, 0, 0);
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
</style>
  