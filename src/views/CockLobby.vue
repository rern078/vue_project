<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">COCK FIGHTING</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in cockLobby" :key="index">
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
  name: 'CockLobby',
  data() {
    return {
      cockLobby: [
        { name: 'COCK1', url: require('@/assets/images/cock/s128.jpg') }, { name: 'COCK1', url: require('@/assets/images/cock/sv388.jpg') },
      ]
    }
  }
}
</script>