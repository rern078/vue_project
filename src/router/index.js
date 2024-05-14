import { createRouter, createWebHistory } from 'vue-router'
import IndexLobby from '../views/IndexLobby.vue'
import SportLobby from '../views/SportLobby.vue'
import CasinoLobby from '../views/CasinoLobby.vue'
import SlotLobby from '../views/SlotLobby.vue'
import LotteryLobby from '../views/LotteryLobby.vue'
import NumberLobby from '../views/NumberLobby.vue'
import PokerLobby from '../views/PokerLobby.vue'
import CockLobby from '../views/CockLobby.vue'

import DashboardIndex from '../components/dashboard/DashboardIndex.vue'

const routes = [
  // Dashboard 
  { path: '/dashboard', name: 'DashboardIndex', component: DashboardIndex, meta: { title: 'hcgaming - dashboard' } },

  // page lobby
  { path: '/', name: 'IndexLobby', component: IndexLobby, },
  { path: '/sport_lobby', name: 'SportLobby', component: SportLobby, meta: { title: 'hcgaming - sport lobby' } },
  { path: '/casino_lobby', name: 'CasinoLobby', component: CasinoLobby, meta: { title: 'hcgaming - casino lobby' } },
  { path: '/slot_lobby', name: 'SlotLobby', component: SlotLobby, meta: { title: 'hcgaming - slot lobby' } },
  { path: '/lottery_lobby', name: 'LotteryLobby', component: LotteryLobby, meta: { title: 'hcgaming - lottery lobby' } },
  { path: '/number_lobby', name: 'NumberLobby', component: NumberLobby, meta: { title: 'hcgaming - number lobby' } },
  { path: '/poker_lobby', name: 'PokerLobby', component: PokerLobby, meta: { title: 'hcgaming - poker lobby' } },
  { path: '/cock_lobby', name: 'CockLobby', component: CockLobby, meta: { title: 'chcgaming - cock lobby' } }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'hcgaming';
  next();
});

export default router
