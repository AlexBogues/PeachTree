import Shuffle from "./Shuffle";

let globalMixin = {
    methods: {
    }
}

Object.assign(globalMixin.methods, { Shuffle: Shuffle.methods.ShuffleArray })

export default globalMixin
/*
If you want to import a specfic function and make it part of a mixin, 
Object.assign(<MixinVariable>.methods, {<functionName>: <imported function>})
Vue.mixin(<MixinVariable>);
*/
