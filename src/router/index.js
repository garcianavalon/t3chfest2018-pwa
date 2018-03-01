import Vue from 'vue'
import Router from 'vue-router'
import Agenda from '@/components/agenda'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'agenda',
      component: Agenda
    }
  ]
})
