<script setup lang="ts">
    import { defineAsyncComponent } from 'vue'
    const ListChar = defineAsyncComponent(() =>
        import('./ListChar.vue')
    )
</script>

<template>
    <h1 class="title">RICK</h1>
    <Suspense>
    <ListChar charName="rick" />
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<style scoped>
    .title {
        color: green;
    }
</style>

