import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'
import VModal from 'vue-js-modal'
import 'hover.css'
Vue.prototype.$axios = axios
Vue.use(VuePageTransition)
Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
