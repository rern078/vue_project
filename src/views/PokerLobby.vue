<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">POKER</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in pokerLobby" :key="index">
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
  name: 'PokerLobby',
  data() {
    return {
      pokerLobby: [
        { name: 'POKER1', url: require('@/assets/images/poker/apoung.jpg') }, { name: 'POKER1', url: require('@/assets/images/poker/ham.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/kaiyuan.jpg') }, { name: 'POKER1', url: require('@/assets/images/poker/kate.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/klaklouk.jpg') }, { name: 'POKER1', url: require('@/assets/images/poker/ongdo.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/poke.jpg') }, { name: 'POKER1', url: require('@/assets/images/poker/sikuthai.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/tienlen.jpg') }, { name: 'POKER1', url: require('@/assets/images/poker/we1poker.jpg') },
      ],
    }
  }
}
</script>