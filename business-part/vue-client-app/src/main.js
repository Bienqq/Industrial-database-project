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
  Link,
  Table,
  Pagination,
  Badge,
  Modal
} from 'bootstrap-vue/es/components'
import router from "./router"

Vue.use(Layout);
Vue.use(Navbar)
Vue.use(FormInput)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Card)
Vue.use(Link)
Vue.use(Table)
Vue.use(Pagination)
Vue.use(Badge)
Vue.use(Modal)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')