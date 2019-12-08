import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sort',
    name: 'sort',
    component: () => import( /* webpackChunkName: "about" */ '../views/sort/index.vue')
  },
  {
    path: '/myself',
    name: 'myself',
    component: () => import( /* webpackChunkName: "about" */ '../views/myself/index.vue'),

  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/about/index.vue')
  },
  {
    path: '/safe',
    name: 'safe',
    component: () => import( /* webpackChunkName: "about" */ '../views/safe/index.vue')
  },
  {
    path: '/cardpack',
    name: 'cardpack',
    component: () => import( /* webpackChunkName: "about" */ '../views/cardpack/index.vue')
  },
  {
    path: '/adress',
    name: 'adress',
    component: () => import( /* webpackChunkName: "about" */ '../views/adress/index.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import( /* webpackChunkName: "about" */ '../views/brand/index.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import( /* webpackChunkName: "about" */ '../views/collect/index.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import( /* webpackChunkName: "about" */ '../views/staff/index.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import( /* webpackChunkName: "about" */ '../views/article/index.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import( /* webpackChunkName: "about" */ '../views/find/index.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router