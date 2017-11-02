<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <input v-model="myText">
                <h3>Filters</h3>
                <p>{{ myText|reverseText }}</p>
                <p>{{ myText|appendCount }}</p>
                <h3>Computed</h3>
                <p>{{ myTextReversed }}</p>
                <p>{{ myTextCounted }}</p>
                <h3>Mixin</h3>
                <input v-model="mixinText">
                <p>{{ mixMyTextCounted }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { countMixin } from './countMixin';
    export default {
        data() {
            return {
                myText: 'Starter text defined in App.vue'
            }
        },
        computed: {
            myTextReversed() {
                return this.myText.split('').reverse().join('');
            },
            myTextCounted() {
                return this.myText + ' (' + this.myText.length + ')';
            }
        },
        filters: {
            reverseText(value) {
                return value.split('').reverse().join('');
            }
        },
        mixins: [ countMixin ]
    }
</script>

<style></style>
