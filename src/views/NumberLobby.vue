<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">NUMBER</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in numberLobby" :key="index">
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
  name: 'NumberLobby',
  data() {
    return {
      numberLobby: [
        { name: 'NUMBER1', url: require('@/assets/images/number/keno.jpg') }, { name: 'NUMBER1', url: require('@/assets/images/number/keno_new.jpg') },
        { name: 'NUMBER1', url: require('@/assets/images/number/livenumber.jpg') }, { name: 'NUMBER1', url: require('@/assets/images/number/new-keno.jpg') },
        { name: 'NUMBER1', url: require('@/assets/images/number/number.jpg') },
      ],
    }
  }
}
</script>