<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">CASINO</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in casinoLobby" :key="index">
          <img class="img_game" v-bind:src="items.url" alt="">
          <div class="text_title">
            <a href="">
              <em>Play</em>
            </a>
          </div>
          <h5 class="box_name">{{ items.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasinoLobby',
  data() {
    return {
      casinoLobby: [
        { name: 'tga casino', url: require('@/assets/images/casino/tga.jpg') }, { name: 'evo casino', url: require('@/assets/images/casino/evo.jpg') }, { name: 'supernowa casino', url: require('@/assets/images/casino/supernowa.jpg') }, { name: 'miki casino', url: require('@/assets/images/casino/miki.jpg') },
        { name: 'ag casino', url: require('@/assets/images/casino/ag.jpg') }, { name: 'gd casino', url: require('@/assets/images/casino/gd.jpg') }, { name: 'pp_ca casino', url: require('@/assets/images/casino/pp_ca.jpg') }, { name: 'sa casino', url: require('@/assets/images/casino/sa.jpg') },
        { name: 'allbet casino', url: require('@/assets/images/casino/allbet.jpg') }, { name: 'sexy casino', url: require('@/assets/images/casino/sexy.jpg') }, { name: 'royal casino', url: require('@/assets/images/casino/royal.jpg') }, { name: 'welive casino', url: require('@/assets/images/casino/welive.jpg') },
        { name: 'dg99 casino', url: require('@/assets/images/casino/dg99.jpg') }, { name: 'wm casino', url: require('@/assets/images/casino/wm.jpg') }, { name: 'yeebet casino', url: require('@/assets/images/casino/yeebet.jpg') }, { name: 'n2live casino', url: require('@/assets/images/casino/n2live.jpg') },
      ],
    }
  }
}
</script>

<style scoped></style>