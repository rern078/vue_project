<template>
  <header>
    <div class="top_header">
      <div class="main_w top_head">
        <div class="head_left">
          <p class="clock_time">{{ currentDate }} {{ currentTime }}</p>
        </div>
        <div class="head_right">
          <!-- <router-link to="/login" class="btn_login btn_auth">{{ $t('login') }}</router-link> -->
          <button @click="showLogin = true" class="btn_login btn_auth">{{ $t('login') }}</button>
          <button @click="showRegister = true" class="btn_register btn_auth">{{ $t('register') }}</button>
          <div class="language">
            <ul class="languagepicker large">
              <li v-for="language in languages" :key="language.code"
                :class="{ active: currentLanguage === language.code }">
                <a href="#" @click="changeLanguage(language.code)">
                  <img :src="require(`../assets/images/flag/${language.flag}.png`)" />
                </a>
              </li>
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
    <!-- Register Pop Up  -->
    <div v-if="showRegister" class="popup">
      <RegisterForm v-if="showRegister" @close="showRegister = false" @show-login="switchToLogin" />
    </div>
    <!-- End Register Pop Up  -->
    <!-- Login Pop Up  -->
    <div v-if="showLogin" class="popup">
      <LoginForm v-if="showLogin" @close="showLogin = false" @show-register="switchToRegister" />
    </div>
    <!-- End Login Pop Up  -->
  </header>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  name: 'HeaderPage',
  components: {
    RegisterForm,
    LoginForm,
  },
  data() {
    return {
      showRegister: false,
      showLogin: false,
      currentDate: this.getCurrentDate(),
      currentTime: new Date().toLocaleTimeString(),
      languages: [
        { code: 'en', flag: 'en' }, { code: 'kh', flag: 'ca' },
        { code: 'cn', flag: 'cn' }, { code: 'vn', flag: 'vn' },
        { code: 'th', flag: 'th' }, { code: 'id', flag: 'id' },
      ],
      currentLanguage: 'en'
    };
  },
  methods: {
    changeLanguage(code) {
      this.$i18n.locale = code;
      this.currentLanguage = code;
    },
    getCurrentDate(dateObj = new Date()) {
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const dateComponents = dateObj.toLocaleDateString('en-US', options).split(' ');
      return `${dateComponents[0]} / ${dateComponents[0]} / ${dateComponents[2]}`;
    },
    switchToRegister() {
      this.showLogin = false;
      this.showRegister = true;
    },
    switchToLogin() {
      this.showLogin = true;
      this.showRegister = false;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      const now = new Date();
      this.currentDate = this.getCurrentDate(now);
      this.currentTime = now.toLocaleTimeString();
    }, 1000);
  },
}
</script>
