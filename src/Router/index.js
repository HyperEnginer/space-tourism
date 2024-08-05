import { createRouter, createWebHistory } from 'vue-router'
import Crew from '../components/Crew/Crew.vue'


const routes = [
  { path: '/', name:"Home" },
  { path: '/destination', name:"Destination" },
  { path: '/crew', name:"Crew", component: Crew },
  { path: '/technology', name:"Technology" }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router