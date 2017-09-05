import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/pages/Hello/Hello'
// import todo from '@/pages/todo'
// import TestVuex from '@/pages/TestVuex'

const Index = resolve => require(['@/pages/Index/Index.vue'], resolve)
const todo = resolve => require(['@/pages/todo/todo.vue'], resolve)
const TestVuex = resolve => require(['@/pages/TestVuex/TestVuex.vue'], resolve)
const Publish = resolve => require(['@/pages/Publish/Publish.vue'], resolve)
const Me = resolve => require(['@/pages/Me/Me.vue'], resolve)
const BookDetail = resolve => require(['@/pages/BookDetail/BookDetail.vue'], resolve)
const OrderDetail = resolve => require(['@/pages/OrderDetail/OrderDetail.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/todo',
    	component:todo
    },
    {
      path:'/vuex',
      component:TestVuex
    },
    {
      path:'/publish',
      component:Publish
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/bookdetail',
      component:BookDetail
    },
    {
      path:'/orderdetail',
      component:OrderDetail
    }
  ]
})
