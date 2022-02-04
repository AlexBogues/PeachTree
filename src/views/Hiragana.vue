<template>
  <div class="about">
    <h1>This is a page about Hiragana</h1>
  </div>
  <FlashCard v-for="Gan in Hiragana"
    :key="Gan.Character"
    :Option="Gan"></FlashCard>
  <CharacterSelector></CharacterSelector>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import CharacterSelector from '@/components/CharacterSelector.vue';
    import FlashCard from '@/components/FlashCard.vue';

    export default defineComponent({
        name: "Hiragana",
        components: {
            CharacterSelector,
            FlashCard
        },
        data() {
            return {
                Hiragana: [
                    {
                        "Romaji": "a",
                        "Character": "あ",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "i",
                        "Character": "い",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "u",
                        "Character": "う",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "e",
                        "Character": "え",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "o",
                        "Character": "お",
                        "IsSelected": false,
                    },
                ]
            }
        }
    })
</script>