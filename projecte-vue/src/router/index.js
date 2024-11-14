import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import FetchDataView from '../views/FetchDataView.vue'
import AxiosDataView from '../views/AxiosDataView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/calculator', name: 'calculator', component: CalculatorView },
  { path: '/fetch-data', name: 'fetch-data', component: FetchDataView },
  { path: '/axios-data', name: 'axios-data', component: AxiosDataView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router