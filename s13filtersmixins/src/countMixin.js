export const countMixin = {
    data() {
        return {
            mixinText: 'Starter text defined inside mixin'
        }
    },
    computed: {
        mixMyTextCounted() {
            return this.mixinText + ' (' + this.mixinText.length + ')';
        }
    }
};
