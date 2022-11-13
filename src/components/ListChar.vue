<script setup lang="ts">
    const props = defineProps({
        charName: String
    })
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${props.charName}`)
    const ricks = await res.json()
    console.log(ricks) 
</script>

<template>
    <h1>Ricks output here...</h1>
    <ul>
        <li v-for="item in ricks.results">
            <span v-for="(value, key) in item">
                {{key}}: {{value}}
            </span>
        </li>
    </ul>
</template>

<style scoped>
</style>
