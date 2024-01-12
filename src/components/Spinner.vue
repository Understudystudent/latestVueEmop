<template>
    <div class="position-fixed bg-black 100vh" :class="{ doneLoading: loading }">
        <div class="content 50vh 50vw">
        <div class="texts">
            <p>Carl James</p>
            <p>Carl James</p>
        </div>
        <div class="texts">
            <p>Carl James</p>
            <p>Carl James</p>
        </div>
        <div class="texts">
            <p>Carl James</p>
            <p>Carl James</p>
        </div>
        <div class="texts">
            <p>Carl James</p>
            <p>Carl James</p>
        </div>
        <div class="texts">
            <p>Carl James</p>
            <p>Carl James</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "SpinnerComp",
        props: {
            loading: Boolean
        }
    }
</script>

<style scoped>

div {
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.doneLoading {
    animation-name: doneLoading;
    animation-duration: 0s;
    animation-fill-mode: forwards;
}

@keyframes doneLoading {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}

*{
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
}

.content {
    position: absolute;
    /* top: 500px;
    left: 500px; */
    transform: translate(-50%, -50%);
}

.texts {
    position: relative;
    height: 40px;
    line-height: 40px;
    color: white;
    font-size: 48px;
    text-transform: uppercase;
    overflow: hidden;
}

.texts:nth-child(odd) {
    transform: skew(60deg, -30deg);
}

.texts:nth-child(even){
    transform: skew(0, -30deg) scaleY(1.5);
}

.texts:nth-child(1) {
    left: -50px;
}

.texts:nth-child(2) {
    top: 10px;
    left: -15px;
}

.texts:nth-child(3) {
    top: 19px;
    left: 20px;
}
.texts:nth-child(4) {
    top: 29px;
    left: 55px;
}
.texts:nth-child(5) {
    top: 38px;
    left: 90px;
}

p {
    transform: 0.5s ease-in-out;
    animation: climbing 1s linear infinite;
}

@keyframes climbing {
    100% {
        transform: translate(0, -40px);
    }
}



</style>