
<template>
    <div>
        <h1>Filters and Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <input v-model="name">

    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    import { sharedObj } from './sharedObj';

    export default {
        data() {
            return {
                name: sharedObj.name
            }
        },
        mixins: [ fruitMixin ],
        created() {
            console.log('Created via List.vue');
        }
    }
</script>

<style></style>
