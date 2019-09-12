import Vue from 'vue'
import App from './App'
import {STATE_OK , handlerImgUrl} from '@/config/config'
import store from './store'
import './common/common.scss'

// Vue.use(VueX)
Vue.prototype.STATE_OK=STATE_OK
Vue.prototype.handlerImgUrl=handlerImgUrl
Vue.config.productionTip = false
let toPrice=function(price){
	return Number(price).toFixed(2)
}
Vue.filter('toPrice', toPrice)
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
