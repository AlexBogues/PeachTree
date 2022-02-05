import Character from "../Interfaces/Characters"

export const ShuffleArray = function ShuffleArray(ToShuffle: Array<Character>) {
    let currentIndex = ToShuffle.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [ToShuffle[currentIndex], ToShuffle[randomIndex]] = [
        ToShuffle[randomIndex], ToShuffle[currentIndex]];
    }

    return ToShuffle;
}

// Mixin export by default
export default {
    methods: {
        ShuffleArray: ShuffleArray
    }
}
