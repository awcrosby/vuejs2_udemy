<template>
    <div class="container">
        <!-- <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed.blink="{mainColor: 'blue', secondColor: 'green', delay: 500}">Color me</p>
            </div>
        </div> -->
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Exercise</h1>
                <button v-customOn:click="clicked" class="btn btn-primary">click me</button>
                <hr>
                <div
                    style="width: 100px; height: 100px; background-color: lightgreen"
                    v-customOn:mouseenter="clicked"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'customOn': {
                bind(el, binding) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert('I was clicked');
            }
        }
    }
</script>

<style></style>
