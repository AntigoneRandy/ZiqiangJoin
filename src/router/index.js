import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'post',
        component: () => import('../views/PostMain.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/PostView.vue')
          },
          {
            path: 'create',
            name: 'postCreate',
            component: () => import('../views/PostCreate.vue')
          }
        ]
      },
      {
        path: 'interview',
        component: () => import('../views/InterviewMain.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/InterviewView.vue')
          },
          {
            name: 'interviewDetail',
            path: 'detail/:id',
            component: () => import('../views/InterviewDetail.vue')
          }
        ]
      },
      { path: 'organization', component: () => import('../views/Organization.vue') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
