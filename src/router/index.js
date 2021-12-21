import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'
import EditPost from '../views/EditPost.vue'
import Bienvenido from '../views/Bienvenido.vue'
import Car from '../views/Car.vue'
import Buyed from '../views/Buyed.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/car/:id',
    name: 'Car',
    component: Car
  },
  {
    path: '/buyed',
    name: 'Buyed',
    component: Buyed
  },
  
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/',
    name: 'bienvenido',
    component: Bienvenido
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
