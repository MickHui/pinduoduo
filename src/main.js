import Vue  from 'vue'
import App from "./App"
import iconfont from './../static/styls/iconfont.css'
 //引入路由器
import router from './router'


 new Vue({
 	el:'#app',
 	router,
 	render:h=>h(App)
 })