import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from "@/views/Todo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //console.log('beforeEach')
  //console.log(to)
  //this to object has a name property, which comes from the name of the component we set above
  document.title = `${process.env.VUE_APP_TITLE} - ${ to.name }`
  next()
})

export default router
