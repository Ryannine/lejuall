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
    path: '/order',
    name: 'order',
    component: () => import( /* webpackChunkName: "about" */ '../views/order/index.vue'),
    redirect: '/order/all',
    children: [{
        path: 'all',
        name: 'orderAll',
        component: () => import( /* webpackChunkName: "about" */ '../views/order/all/index.vue'),

      },
      {
        path: 'obligation',
        name: 'orderObligation',
        component: () => import( /* webpackChunkName: "about" */ '../views/order/obligation/index.vue'),

      },
      {
        path: 'accountpaid',
        name: 'orderAccountpaid',
        component: () => import( /* webpackChunkName: "about" */ '../views/order/accountpaid/index.vue'),

      },
      {
        path: 'done',
        name: 'orderDone',
        component: () => import( /* webpackChunkName: "about" */ '../views/order/done/index.vue'),

      },
    ]
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
    path: '/recomdetail',
    name: 'recomdetail',
    component: () => import( /* webpackChunkName: "about" */ '../views/recomdetail/index.vue')
  },
  {
    path: '/articledetail',
    name: 'articledetail',
    component: () => import( /* webpackChunkName: "about" */ '../views/articledetail/index.vue')
  },
  {
    path: '/find',
    name: 'find',
    redirect: '/find/writings',
    component: () => import( /* webpackChunkName: "about" */ '../views/find/index.vue'),
    children: [{
        path: 'writings',
        name: 'findWritings',
        component: () => import( /* webpackChunkName: "about" */ '../views/find/writings/index.vue'),
      },
      {
        path: 'recommend',
        name: 'findRecommend',
        component: () => import( /* webpackChunkName: "about" */ '../views/find/recommend/index.vue'),
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router