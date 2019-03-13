import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VConsole from 'vconsole'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
    new VConsole()
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
