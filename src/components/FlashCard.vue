<template>
    <li>
        {{ Option.Character }}
    </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FlashCard",
    props: ["Option"],
})
</script>

<style>
    
</style>