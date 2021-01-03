import Vue from 'vue'
import VueRouter from 'vue-router'

import article from '../components/article'
import List from '../components/list'




Vue.use(VueRouter)

const routes = [
{
  path: '/list',
  alias:'/',
  name: 'list',
  component: List
},
{
  path: '/article', 
  name: 'article',
  component: article,


}
]

const router = new VueRouter({
  
mode: 'history',
routes
})

export default router
