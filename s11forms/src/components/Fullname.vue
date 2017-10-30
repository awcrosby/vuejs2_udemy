<template lang="html">
    <div class="form-group">
        <label for="firstname">Full Name</label>
        <input
            id="firstname"
            type="text"
            class="form-control"
            v-model="value"
            @input="changed">
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            changed() {
                this.$emit('input', this.value)
            }
        }
    }
</script>

<style lang="css">
</style>
