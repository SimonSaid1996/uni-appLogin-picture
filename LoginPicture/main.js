import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
Vue.prototype.$store = store

App.mpType = 'app'
//the next stemp is to combine this section of the code with the picture one and form a larger app
const app = new Vue({
    store,
    ...App
})
app.$mount()
