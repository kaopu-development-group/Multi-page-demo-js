import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cell from '@/components/cell'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    
  ]
})
