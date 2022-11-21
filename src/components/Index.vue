<script setup lang="ts">
    import { hoverStore } from '../utils/stores';
    const alrt = (x: string) => {
       // console.log(x)
        hoverStore.setCurr(x)
    }
</script>

<template>
    <nav>
        <ul class="links">
            <router-link to="/">Home</router-link>
            <router-link @mouseover="alrt('rick')" @mouseout="alrt('none')" to="/rick">Rick</router-link>
            <router-link @mouseover="alrt('morty')" @mouseout="alrt('none')" to="/morty">Morty</router-link>
        </ul>
    </nav>

</template>

<style scoped>
.links {
    display: flex;
    justify-content: space-evenly;
}
</style>
