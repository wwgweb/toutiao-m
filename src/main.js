import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入并注册样式
import Vant from 'vant'
import 'vant/lib/index.css'
// 加载动态设置rem 基准值
import 'amfe-flexible'

// 加载全局css样式
import './styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
