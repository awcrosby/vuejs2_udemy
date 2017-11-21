<template>
    <div>
        Counter is {{ counter }}
    </div>
</template>

<script>
    // export default {
    //     // props: ['counter']
    //     computed: {
    //         counter() {
    //             // return this.$store.state.counter;
    //             return this.$store.getters.doubleCounter;
    //         }
    //     }
    // }
    import { mapGetters} from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        }
    }
</script>
