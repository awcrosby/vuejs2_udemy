<template lang="html">
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected"
    >
        Server Id = {{ server.id }}
    </li>
</template>

<script>
    import { serverBus } from '../main';
    export default {
        props: ['myId', 'server'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server);
            }
        }
    };
</script>

<style scoped lang="css">
    div {
        border: 1px solid green;
    }
</style>
