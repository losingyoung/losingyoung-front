import Vue from 'vue'
import App from './App'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import axios from 'axios'
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('getLoginStatus')
  }
})

