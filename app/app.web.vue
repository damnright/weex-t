<template>
    <transition name="slide-fade">
        <router-view></router-view>
    </transition>
</template>

<style scoped>
    .slide-fade-enter-active {
        transition: all .3s ease-in-out;
    }

    .slide-fade-leave-active {
        transition: all .5s ease-in-out;
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(20px);
        opacity: 0;
    }
</style>

<script>


    export default {
        data(){
            return {}
        }
    }
</script>

