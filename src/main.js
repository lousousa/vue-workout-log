import './assets/scss/base.scss'
import './assets/tailwind.css'
import './../node_modules/jam-icons/js/jam.min'
import './../node_modules/jam-icons/css/jam.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vue-toast-notification/dist/theme-default.css' // alt.: theme-sugar.css

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import MaskedInput from 'vue-text-mask'
import VueToast from 'vue-toast-notification'

Vue.use(Vuex)
Vue.use(Vuetify, { iconfont: 'mdi' })
Vue.use(Vuelidate)
Vue.component('masked-input', MaskedInput)
Vue.use(VueToast)

Vue.config.productionTip = false

import mixins from './mixins'
import store from './store'
const vuexInstance = new Vuex.Store(store)

new Vue({
    mixins,
    router,
    store: vuexInstance,
    render: h => h(App),
}).$mount('#app')