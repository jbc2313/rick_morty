<script setup lang="ts">
    import { hoverStore } from '../utils/stores';
</script>

<template>
    <nav>
        <ul class="links">
            <router-link to="/">Home</router-link>
            <router-link @mouseover="hoverStore.setCurr('rick')" to="/rick">Rick</router-link>
            <router-link to="/morty">Morty</router-link>
        </ul>
    </nav>

</template>

<style scoped>
.links {
    display: flex;
    justify-content: space-evenly;
}
</style>
