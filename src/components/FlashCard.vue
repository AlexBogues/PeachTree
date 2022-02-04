<template>
    <article class="FlashCard">
        {{ Option.Character }}
    </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FlashCard",
    props: ["Option"],
})
</script>

<style>
    .FlashCard {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid grey;
        padding: .5rem;
        margin: .5rem;
        border-radius: .5rem;
        height: 15rem;
        width: 25rem;
        font-size: 8rem;
    }
</style>