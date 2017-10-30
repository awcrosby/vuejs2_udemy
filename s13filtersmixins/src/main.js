import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', function(value) {
    return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
