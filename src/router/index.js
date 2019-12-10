import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import( /* webpackChunkName: "Login" */ '../views/login/index.vue'),
        meta: {
            show: false
        }
    },
    // 订单
    {
        path: '/order',
        name: 'order',
        component: () => import( /* webpackChunkName: "about" */ '../views/order/index.vue'),
        redirect: '/order/all',
        meta: {
            show: false,
        },
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
        component: () =>
            import( /* webpackChunkName: "Login" */ '../views/about/index.vue'),
        meta: {
            show: false
        }
    },

    // 购物车
    {
        path: '/buy/:id',
        name: 'buy',
        component: () =>
            import( /* webpackChunkName: "buy" */ '../views/buy/index.vue'),
        meta: {
            show: false
        }
    },
    // 购物车
    {
        path: '/shop',
        name: 'shop',
        component: () =>
            import( /* webpackChunkName: "shop" */ '../views/shop/index.vue'),
        meta: {
            show: false
        }
    },
    // 搜索
    {
        path: '/search',
        name: 'search',
        component: () =>
            import( /* webpackChunkName: "search" */ '../views/search/index.vue'),
        meta: {
            show: false
        }
    },
    // 分类详情
    {
        path: '/sortInfo/:id',
        name: 'sortInfo',
        component: () =>
            import( /* webpackChunkName: "sortInfo" */ '../views/sortInfo/index.vue'),
        meta: {
            show: false
        }
    },
    // 创意
    {
        path: '/idea',
        name: 'idea',
        redirect: '/idea/new',
        component: () =>
            import( /* webpackChunkName: "idea" */ '../views/idea/index.vue'),
        meta: {
            show: false
        },
        children: [{
            path: 'new',
            name: 'new',
            component: () =>
                import( /* webpackChunkName: "new" */ '../views/idea/new/index.vue'),
        }, {
            path: 'count',
            name: 'count',
            component: () =>
                import( /* webpackChunkName: "count" */ '../views/idea/count/index.vue'),
        }, {
            path: 'price',
            name: 'price',
            component: () =>
                import( /* webpackChunkName: "price" */ '../views/idea/price/index.vue'),
        }, {
            path: 'screen',
            name: 'screen',
            component: () =>
                import( /* webpackChunkName: "screen" */ '../views/idea/screen/index.vue'),
        }]
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        component: () =>
            import( /* webpackChunkName: "register" */ '../views/register/index.vue'),
        meta: {
            show: false
        }
    },
    //home
    {
        path: '/home',
        name: 'home',
        redirect: '/home/tuijian',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import('@/views/home/Home.vue'),
        meta: {
            show: true,
            active: 0
        },
        children: [{
            path: 'tuijian',
            name: 'tuijian',
            component: () =>
                import('@/views/home/tuijian/index.vue'),
            meta: {
                show: true,
                headerShow: true,
                active: 0
            }
        }, {
            path: 'brand',
            name: 'brand',
            component: () =>
                import('@/views/home/brand/index.vue'),
            meta: {
                show: true,
                headerShow: false,
                active: 0
            }
        }]
    },
    //登录
    {
        path: '/login',
        name: 'login',
        component: () =>
            import( /* webpackChunkName: "login" */ '../views/login/index.vue'),
        meta: {
            show: false
        }
    },
    // 分类
    {
        path: '/sort',
        name: 'sort',
        component: () =>
            import( /* webpackChunkName: "sort" */ '../views/sort/index.vue'),
        meta: {
            show: true,
            active: 1
        }
    },
    {
        path: '/myself',
        name: 'myself',
        component: () =>
            import( /* webpackChunkName: "myself" */ '../views/myself/index.vue'),
        meta: {
            show: true,
            active: 3
        }
    },
    {
        path: '/find',
        name: 'find',
        redirect: '/find/writings',
        component: () =>
            import( /* webpackChunkName: "find" */ '../views/find/index.vue'),
        meta: {
            show: true,
            active: 2
        },
        children: [{
            path: 'recommend',
            name: 'recommend',
            component: () =>
                import('@/views/find/recommend/index.vue'),
            meta: {
                show: true,
                active: 2,
                tabShow: false

            }
        }, {
            path: 'writings',
            name: 'writings',
            component: () =>
                import('@/views/find/writings/index.vue'),
            meta: {
                show: true,
                active: 2,
                tabShow: true
            }
        }],
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
        component: () =>
            import('@/views/brand/index.vue'),
        // meta: {
        //     show: true,
        //     headerShow: false,
        //     active: 0
        // }
    },

    {
        path: '*',
        redirect: '/login'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router