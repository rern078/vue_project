<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">SPORT</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in sportLobby" :key="index">
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
  name: 'SportLobby',
  data() {
    return {
      sportLobby: [
        { name: 'afb2 sport', url: require('@/assets/images/sport/afb2.png') }, { name: 'ibc sport', url: require('@/assets/images/sport/ibc.png') },
        { name: 'sbo sport', url: require('@/assets/images/sport/sbo.png') }, { name: 'tf sport', url: require('@/assets/images/sport/tf.png') },
        { name: 'wesport sport', url: require('@/assets/images/sport/wesports.jpg') },
      ],
    }
  }
}
</script>