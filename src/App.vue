<template>
  <div id="app">
    <HeaderPage />
    <SliderPage />
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import SliderPage from './components/SliderPage.vue'
import FooterPage from './components/FooterPage.vue'
export default {
  name: 'App',
  components: {
    HeaderPage,
    SliderPage,
    FooterPage,
  }
}
</script>