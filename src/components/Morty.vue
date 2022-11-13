<script setup lang="ts"> 
    import { defineAsyncComponent } from 'vue'
    const ListChar = defineAsyncComponent(() =>
        import('./ListChar.vue')
    )
</script>

<template>
    <h1>MORTY PAGE</h1>
    <Suspense>
    <ListChar charName="morty" />
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<style scoped>
</style>

