// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'vue-use-vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import '../css/main.css'
import store from './components/BasketStore'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */

Vue.filter('majuscule', function (value) {
  if (!value) return ''
  value = value.toUpperCase()
  return value
})

Vue.filter('signe', function (value) {
  if (!value) return ''
  return value.toFixed(2) + '€'
})

new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
