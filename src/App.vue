<script setup lang="ts">
import NavCustom from "@/components/NavCustom.vue";
</script>

<template>
    <nav class="bg-stone-50">
        <NavCustom />
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about" class="text-red">About</router-link> -->
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
