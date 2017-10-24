<template>
    <div class="container">
        <button class="btn btn-danger" @click="selectedComponent = 'app-red'">Red</button>
        <button class="btn btn-success"  @click="selectedComponent = 'app-green'">Green</button>
        <button class="btn btn-primary"  @click="selectedComponent = 'app-blue'">Blue</button>
        <hr>
        <component :is='selectedComponent'>
            <h3>The HTML from the PARENT!</h3>
        </component>
    </div>
</template>

<script>
    import Red from './components/Red.vue';
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';

    export default {
        data: function() {
            return {
                selectedComponent: 'app-red'
            }
        },
        components: {
            'app-red': Red,
            'app-blue': Blue,
            'app-green': Green
        }
    }
</script>

<style>
</style>
