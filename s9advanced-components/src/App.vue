<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                <hr>
                <p>{{ selectedComponents }}</p>
                <component :is="selectedComponent"></component>
                <!-- <app-quote>
                    <h2 slot="title">{{ quote }}</h2>
                    <p slot>A Wonderful Quote</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quote: "These are the breaks",
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style lang="css">

    h2 {
        color: blue;
    }
</style>
