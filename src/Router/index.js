import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name:"Home" },
  { path: '/destination', name:"Destination" },
  { path: '/crew', name:"Crew" },
  { path: '/technology', name:"Technology" }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router