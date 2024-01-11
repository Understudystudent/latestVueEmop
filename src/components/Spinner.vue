<template>
    <div class="position-fixed bg-black" :class="{ doneLoading: loading }">
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
    background-color: red;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.doneLoading {
    animation-name: doneLoading;
    animation-duration: 1s;
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

</style>