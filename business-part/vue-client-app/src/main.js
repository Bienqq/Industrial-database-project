import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  Navbar,
  FormInput,
  Button,
  Layout,
  Progress,
  Card,
  Link
} from 'bootstrap-vue/es/components'
import router from "./router"


Vue.use(Layout);
Vue.use(Navbar)
Vue.use(FormInput)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Card)
Vue.use(Link)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')