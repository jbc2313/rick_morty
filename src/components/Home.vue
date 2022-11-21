<script setup lang="ts">
    import { watch, ref } from 'vue';
    import { hoverStore } from '../utils/stores';
    
    const imageRick = ref<HTMLImageElement>()
    const imageMorty = ref<HTMLImageElement>()

    watch(
        () => hoverStore.currHover,
        (currHover: any) => {
            console.log(`curr is: ${currHover}`)

            if(hoverStore.currHover === "rick") {
                console.log('Rick is highlighted');
                imageRick.value?.classList.add('hovered')
            } else if(hoverStore.currHover === "morty") {
                console.log('Morty is highlighted');
                imageMorty.value?.classList.add('hovered')
            } else {
                if(imageMorty.value === undefined || imageRick.value === undefined) return
                imageMorty.value.classList.remove('hovered')
                imageRick.value.classList.remove('hovered')
            }
        }
    )
</script>

<template>
    <h1>Rick & Morty, from A to Z</h1>
    <p>This is the home of all the ricks and mortys that exist.</p>
    <p>Alive or Dead.</p>
    <div class="imgs">
        <div class="image">
            <img class="pic" ref="imageRick" src="https://www.looper.com/img/gallery/what-the-mistakes-in-rick-morty-could-really-mean/l-intro-1617842307.jpg" alt="rick"/>
        </div>
        <div class="image">
            <img class="pic" ref="imageMorty" src="https://assets-prd.ignimgs.com/2021/06/17/ram-501-still-for-promo-03-210308-1623956712640.png" alt="morty"/>
        </div>
    </div>
</template>

<style scoped>
    .imgs {
        display: flex;
        justify-content: space-evenly;
    }

    .image {
        width: 25%;
    }

    .pic {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }

    .hovered {
        border: solid 3px white;
        border-radius: 16px;
        transform: scale(1.3);
    }
</style>

