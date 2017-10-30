import Vue from 'vue'
import App from './App.vue'
import Exercise from './Exercise.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
  el: '#app',
  render: h => h(Exercise)
})
