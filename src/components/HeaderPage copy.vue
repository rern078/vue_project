<template>
  <header>
    <div class="top_header">
      <div class="main_w top_head">
        <div class="head_left">
          <h2>VUE JS & VUE X</h2>
        </div>
        <div class="head_right">
          <router-link to="/login" class="btn_login btn_auth">Login</router-link>
          <router-link to="/register" class="btn_register btn_auth">Register</router-link>
          <div class="language">
            <ul class="languagepicker large">
              <li><a href="#en"><img src="../assets/images/flag/en.png" /></a></li>
              <li><a href="#kh"><img src="../assets/images/flag/ca.png" /></a></li>
              <li><a href="#cn"><img src="../assets/images/flag/cn.png" /></a></li>
              <li><a href="#kh"><img src="../assets/images/flag/vn.png" /></a></li>
              <li><a href="#cn"><img src="../assets/images/flag/th.png" /></a></li>
              <li><a href="#kh"><img src="../assets/images/flag/id.png" /></a></li>
              <li><a href="#cn"><img src="../assets/images/flag/hk.png" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="header">
      <div class="site-header main_w">
        <img alt="Vue logo" class="logo_vue" src="../assets/images/logo1.png">
        <div class="nav_header">
          <router-link to="/" exact :class="{ active: $route.path === '/' }">Home</router-link>
          <router-link to="/sport_lobby" :class="{ active: $route.path === 'sport_lobby' }">Sport</router-link>
          <router-link to="/casino_lobby" :class="{ active: $route.path === 'casino_lobby' }">Casino</router-link>
          <router-link to="/slot_lobby" :class="{ active: $route.path === 'slot_lobby' }">Slot</router-link>
          <router-link to="/lottery_lobby" :class="{ active: $route.path === 'lottery_lobby' }">Lottery</router-link>
          <router-link to="/number_lobby" :class="{ active: $route.path === 'number_lobby' }">Number</router-link>
          <router-link to="/poker_lobby" :class="{ active: $route.path === 'poker_lobby' }">Poker</router-link>
          <router-link to="/cock_lobby" :class="{ active: $route.path === 'cock_lobby' }">CockFight</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>
