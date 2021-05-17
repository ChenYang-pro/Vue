import Vue from 'vue'
import Router from 'vue-router'
import GoodsItem from '../view/GoodsItem'
import Title from '@/view/GoodsTitle'
import Image from '@/view/GoodsImage'
import Cart from '@/view/Cart'
import Header from '@/view/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Header',
      components: {
        default: Header,
        title: Title,
        image: Image
      }
    },
    {
      path: '/goods',
      name: 'GoodsItem',
      component: GoodsItem
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
