<template>
    <div class="about">
    <h1>This is a page about Hiragana</h1>
    </div>
    <div>
        <button @click="Prev()" :disabled="CurrentPosition == 0">Previous</button>
        <button @click="Next()" :disabled="CurrentPosition == Hiragana.length - 1">Next</button>
    </div>
    <ul class="FlashCardList">
        <li class="FlashCard">
            {{ ActiveCharacter() }}
        </li>
        <li class="FlashCard--BackgroundCard">
        </li>
  </ul>
  
  <CharacterSelector></CharacterSelector>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import CharacterSelector from '@/components/CharacterSelector.vue';
    import { ShuffleArray } from "../Library/Shuffle"

    export default defineComponent({
        name: "Hiragana",
        components: {
            CharacterSelector,
        },
        data() {
            return {
                CurrentPosition: 0,
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
        },
        mounted() {
            this.Hiragana = ShuffleArray(this.Hiragana)
        },
        methods: {
            ActiveCharacter() {
                return this.Hiragana[this.CurrentPosition].Character
            },
            Prev() {
                if (this.CurrentPosition > 0) {
                    this.CurrentPosition--
                }
            },
            Next() {
                if (this.CurrentPosition != this.Hiragana.length -1) {
                    this.CurrentPosition++
                }
            }
        }
    })
</script>

<style>
    .FlashCardList {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .FlashCard {
        box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.5);
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
        background-color: white;
    }
</style>