import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = binding.value['delay'];
        }
        if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value['secondColor'];
            let currentColor = mainColor;
            setTimeout(() => {
                setInterval(() => {
                    currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                    if (binding.arg == 'background') {
                        el.style.backgroundColor = currentColor;
                    }
                    else {
                        el.style.color = currentColor;
                    }
                }, 1000);
            }, delay);
        }
        else {
            setTimeout(() => {
                if (binding.arg == 'background') {
                    el.style.backgroundColor = binding.value.mainColor;
                }
                else {
                    el.style.color = binding.value.mainColor;
                }
            }, delay);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
