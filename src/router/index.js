import { createRouter, createWebHistory } from 'vue-router'
import IndexLobby from '../views/IndexLobby.vue'
import SportLobby from '../views/SportLobby.vue'
import CasinoLobby from '../views/CasinoLobby.vue'
import SlotLobby from '../views/SlotLobby.vue'
import LotteryLobby from '../views/LotteryLobby.vue'
import NumberLobby from '../views/NumberLobby.vue'
import PokerLobby from '../views/PokerLobby.vue'
import CockLobby from '../views/CockLobby.vue'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  { path: '/register',name: 'RegisterPage', component: RegisterPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  {
    path: '/',
    name: 'IndexLobby',
    component: IndexLobby
  },
  {
    path: '/sport_lobby',
    name: 'SportLobby',
    component: SportLobby
  },
  {
    path: '/casino_lobby',
    name: 'CasinoLobby',
    component: CasinoLobby
  },
  {
    path: '/slot_lobby',
    name: 'SlotLobby',
    component: SlotLobby
  },
  {
    path: '/lottery_lobby',
    name: 'LotteryLobby',
    component: LotteryLobby
  },
  {
    path: '/number_lobby',
    name: 'NumberLobby',
    component: NumberLobby
  },
  {
    path: '/poker_lobby',
    name: 'PokerLobby',
    component: PokerLobby
  },
  {
    path: '/cock_lobby',
    name: 'CockLobby',
    component: CockLobby
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
