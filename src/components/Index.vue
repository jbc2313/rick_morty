<script setup lang="ts">

</script>

<template>
    <nav>
        <ul class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/rick">Rick</router-link>
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
