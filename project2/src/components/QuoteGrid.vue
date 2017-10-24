<template lang="html">
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="delQuote(index)">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        methods: {
            delQuote(index) {
                this.$emit('quoteDeleted', index);                
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>

</style>
