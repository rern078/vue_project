<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">LOTTERY</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in lotteryLobby" :key="index">
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
  name: 'LotteryLobby',
  data() {
    return {
      lotteryLobby: [
        { name: 'LOTTERY1', url: require('@/assets/images/lottery/lottery.jpg') }, { name: 'LOTTERY1', url: require('@/assets/images/lottery/thai_lottery.jpg') },
        { name: 'LOTTERY1', url: require('@/assets/images/lottery/vn_lottery.jpg') }, { name: 'LOTTERY1', url: require('@/assets/images/lottery/vn2_lottery.jpg') },
      ],
    }
  }
}
</script>