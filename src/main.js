import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Buefy from 'buefy'
import './assets/scss/index.scss'

Vue.use(Buefy)

Vue.prototype.$http = axios
Vue.prototype.repo = "https://raw.githubusercontent.com/xxxzc/fds/master/resource/"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')