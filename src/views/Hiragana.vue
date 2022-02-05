<template>
    <h1>This is a page about Hiragana</h1>
    <ul class="FlashCardList">
        <li class="FlashCard"
            @click="ShowAnswer()">
            <span>
                {{ IsShowAnswer ? ActiveCharacter().Romaji : ActiveCharacter().Character}}
            </span>
            <div class="FlashCard__Buttons">
                <button class="FlashCard__Buttons__Button" @click.stop="Prev()" :disabled="CurrentPosition == 0">←</button>
                <button class="FlashCard__Buttons__Button" @click.stop="Next()" :disabled="CurrentPosition == Hiragana.length - 1">→</button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { ShuffleArray } from "../Library/Shuffle"

    export default defineComponent({
        name: "Hiragana",
        data() {
            return {
                CurrentPosition: 0,
                IsShowAnswer: false,
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
                    {
                        "Romaji": "ka",
                        "Character": "か",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "ki",
                        "Character": " き",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "ku",
                        "Character": "く",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "ke",
                        "Character": "け",
                        "IsSelected": false,
                    },
                    {
                        "Romaji": "ko",
                        "Character": "こ",
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
                return this.Hiragana[this.CurrentPosition]
            },
            ShowAnswer() {
                this.IsShowAnswer = !this.IsShowAnswer
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
        border-radius: 1rem;
        height: 15rem;
        width: 25rem;
        font-size: 8rem;
        background-color: white;
        cursor: pointer;
        position: relative;
        user-select: none;
        
    }
    .FlashCard__Buttons {
        position: absolute;
        display: flex;
        flex: 1 0 auto;
        width: 100%;
        justify-content: space-between;
    }
    .FlashCard__Buttons__Button {
        border-radius: 100%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        width: 2rem;
        height: 2rem;
        margin: .5rem;
    }
    .FlashCard__Buttons__Button:disabled {
        cursor: not-allowed;
    }
</style>