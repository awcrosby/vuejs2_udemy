<template>
    <div>
        <button @click="increment(100)" class="btn btn-primary">Increment</button>
        <button @click="decrement(50)" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
        // methods: {
        //     increment() {
        //         // this.$emit('updated', 1);
        //         // this.$store.state.counter ++;
        //         this.$store.commit('increment');
        //     },
        //     decrement() {
        //         // this.$emit('updated', -1);
        //         // this.$store.state.counter --;
        //         this.$store.commit('decrement');
        //     }
        // }
    }
</script>
