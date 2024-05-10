<template>
  <div class="main main_w">
    <div class="tab-content">
      <h4 class="titles_game title_g">SLOT</h4>
      <div class="items_main">
        <div class="items_game hover_card" v-for="(items, index) in slotLobby" :key="index">
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
  name: 'SlotLobby',
  data() {
    return {
      slotLobby: [
        { name: 'SLOT1', url: require('@/assets/images/slot/afb.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/bestsoft.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/cq9.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/dragoon.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/fc.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/918kiss.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/icg.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/jili.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/joker.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/btg.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/leap.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/mega888.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/mg.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/netent.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/nextgen.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/pg.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/platipus.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/playstar.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/fishing.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/pt.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/rich88.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/spadegaming.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/w88.jpg') }, { name: 'SLOT1', url: require('@/assets/images/slot/xe88.jpg') },
      ],
    }
  }
}
</script>