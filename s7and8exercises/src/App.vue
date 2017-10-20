<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details
                :myStatus="currentStatus"
            ></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Servers from './components/Servers.vue';
    import ServerDetails from './components/ServerDetails.vue';
    import Footer from './components/Footer.vue';

    export default {
        data: function() {
            return {
                currentStatus: 'set in App.vue'
            };
        },
        components: {
            'app-header': Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>
</style>
