 // 1.引入模块
import Vue from 'vue';
import VueRouter from 'vue-router';
//2.声明使用
Vue.use(VueRouter);

//4.引入一级路由
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Cart from '@/pages/Cart/Cart'
import Person from '@/pages/Person/Person'

//5.引入二级路由

//3.输出路由对象
export default new VueRouter({
   //3.1配置一级路由
    model:'history',
    routes:[
      {
      	path:'/home',
      	component:Home
      },
      {
      	path:'/recommend',
      	component:Recommend
      },
      {
      	path:'/search',
      	component:Search
      },
      {
      	path:'/cart',
      	component:Cart
      },
      {
      	path:'/person',
      	component:Person
      },
      {
      	path:'/',
      	redirect:'/home'
      },
    ]
})	