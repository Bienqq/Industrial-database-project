import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Navbar, FormInput, Button } from 'bootstrap-vue/es/components'

Vue.use(Navbar)
Vue.use(FormInput)
Vue.use(Button)
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
