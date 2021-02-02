import './assets/scss/base.scss'
import './assets/tailwind.css'
import './../node_modules/jam-icons/js/jam.min'
import './../node_modules/jam-icons/css/jam.min.css'
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vuex from 'vuex'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

Vue.use(Vuex)
Vue.use(Vuetify, { iconfont: 'mdi' })
Vue.use(Vuelidate)

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