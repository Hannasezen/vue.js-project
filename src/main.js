import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './pages/index'
import Item from './pages/item'
import './assets/css/style.css'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'item',
      path: '/item',
      component: Item
    }
  ]
})

new Vue({
  el: '#app',
  router: router
  //render: h => h(App)
})
