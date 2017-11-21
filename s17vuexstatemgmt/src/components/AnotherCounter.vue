<template>
    <div>
        <button @click="asyncIncrement({by: 50, duration: 500})" class="btn btn-primary">Increment</button>
        <button @click="asyncDecrement({by: 50, duration: 500})" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>
