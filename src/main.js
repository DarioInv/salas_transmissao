import Vue from 'vue'
import App from './App'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

new Vue({
    render: h => h(App),
}).$mount("#app")