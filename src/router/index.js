import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import Collect from '../views/Collect'
import VideoPage from '../views/VideoPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {
        path:'/',
        name: 'home',
        component: Home,
      },
      {
        path: '/collect',
        name: 'collect',
        component: Collect,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: VideoPage,
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
