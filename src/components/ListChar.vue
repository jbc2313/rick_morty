<script setup lang="ts">
    const props = defineProps({
        charName: String
    })
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${props.charName}`)
    const ricks = await res.json()
    console.log(ricks) 
</script>

<template>
    <ul class="info">
        <li class="data" v-for="item in ricks.results">
            <div v-for="(value, key, index) in item">
                #{{index}} [ {{key}}: {{value}} ]
                <div v-if="index === 8">
                    <img :src="value"/>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.data {
    margin: 100px;
    background-color: silver;
    color: black;
    border-radius: 16px;
}
</style>
