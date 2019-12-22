import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from './locales/index'
import './assets/styles/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faFacebookSquare, faGoogle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueI18n)

Vue.config.productionTip = false

console.log(messages)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  data: {
    appName: 'Mini Battle Royale'
  }
}).$mount('#app')
