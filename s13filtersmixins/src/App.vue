<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and Mixins</h1>
                <p>{{ text|toUppercase }}</p>
                <p>{{ text|toLowercase }}</p>
                <hr>
                <input v-model="name">
                <button v-on:click="changeName()">change name</button>
                <hr>
                <button v-on:click="fruits.push('Berries')">Add New</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';
    import { sharedObj } from './sharedObj';

    export default {
        mixins: [ fruitMixin ],
        data() {
            return {
                fruits: ['Apple', 'Banana'],
                text: 'Hello there!',
                name: sharedObj.name
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            'app-list': List
        },
        methods: {
            changeName() {
                sharedObj.name = 'Newton';
                this.name = sharedObj.name;
            }
        }
    }
</script>

<style></style>
