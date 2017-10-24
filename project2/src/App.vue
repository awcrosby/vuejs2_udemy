<template>
    <div class="container">
        <app-header :barPercent="barPercent" :quoteCount="quoteArray.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid @quoteDeleted="quoteArray.splice($event, 1)"></app-quote-grid>
        <app-quote-grid :quotes="quoteArray" @quoteDeleted="delQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to Delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data: function () {
            return {
                quoteArray: ['one'],
                maxQuotes: 5
            }
        },
        computed: {
            barPercent: function() {
                return (this.quoteArray.length / this.maxQuotes) * 100
            }
        },
        components: {
            'app-quote-grid': QuoteGrid,
            'app-new-quote': NewQuote,
            'app-header': Header
        },
        methods: {
            newQuote(quote) {
                if (this.quoteArray.length >= this.maxQuotes) {
                    return alert('Please delete quotes first!');
                }
                this.quoteArray.push(quote);
            },
            delQuote(index) {
                this.quoteArray.splice(index, 1);
            }
        }
    }
</script>

<style>
    .progressBarShell {
        border: 1px solid;
        width: 200px;
        height: 20px;
    }
    .progressBar {
        color: white;
        background-color: black;
    }
</style>
