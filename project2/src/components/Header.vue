<template lang="html">
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                     :style="{ width: barPercent + '%' }"
                 >
                    {{ quoteCount }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['barPercent', 'quoteCount', 'maxQuotes']
    }
</script>

<style lang="css">
</style>
