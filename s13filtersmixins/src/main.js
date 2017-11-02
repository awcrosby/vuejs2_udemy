import Vue from 'vue'
import App from './App.vue'
import Exercise from './Exercise.vue'

Vue.filter('toLowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('appendCount', function(value) {
    return value + ' (' + value.length + ')';
});

new Vue({
  el: '#app',
  render: h => h(Exercise)
})
