<template lang="html">
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">
            <p>Please select a server</p>
        </div>
        <div v-else>
            <p>Server #{{ server.id }} selected, status = {{ server.status }}</p>
            <button @click="resetStatus">Change to Normal</button>
        </div>
    </div>
</template>

<script>
    import { serverBus } from '../main';
    export default {
        data: function() {
            return {
                server: null
            };
        },
        methods: {
            resetStatus() {
                this.server.status = 'Normal';
            }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style scoped lang="css">
    div {
        border: 1px solid red;
    }
</style>
