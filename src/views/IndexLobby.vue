<template>
  <section class="main nav_tab_game">
    <div class="main_w">
      <div class="nav nav-tabs tab_contents" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
          role="tab" aria-controls="nav-home" aria-selected="true"><i class="icon all_ico"></i>Home</button>
        <button class="nav-link" id="nav-sports-tab" data-bs-toggle="tab" data-bs-target="#nav-sports" type="button"
          role="tab" aria-controls="nav-sports" aria-selected="false"><i class="icon sport_ico"></i>Sport</button>
        <button class="nav-link" id="nav-casinos-tab" data-bs-toggle="tab" data-bs-target="#nav-casinos" type="button"
          role="tab" aria-controls="nav-casinos" aria-selected="false"><i class="icon casino_ico"></i>Casino</button>
        <button class="nav-link" id="nav-slots-tab" data-bs-toggle="tab" data-bs-target="#nav-slots" type="button"
          role="tab" aria-controls="nav-slots" aria-selected="false"><i class="icon slot_ico"></i>Slot</button>
        <button class="nav-link" id="nav-fishing-tab" data-bs-toggle="tab" data-bs-target="#nav-fishing" type="button"
          role="tab" aria-controls="nav-fishing" aria-selected="true"><i class="icon fish_ico"></i>Fish</button>
        <button class="nav-link" id="nav-numbers-tab" data-bs-toggle="tab" data-bs-target="#nav-numbers" type="button"
          role="tab" aria-controls="nav-numbers" aria-selected="false"><i class="icon number_ico"></i>Number</button>
        <button class="nav-link" id="nav-lotterys-tab" data-bs-toggle="tab" data-bs-target="#nav-lotterys" type="button"
          role="tab" aria-controls="nav-lotterys" aria-selected="false"><i class="icon lottery_ico"></i>Lottery</button>
        <button class="nav-link" id="nav-poker-tab" data-bs-toggle="tab" data-bs-target="#nav-poker" type="button"
          role="tab" aria-controls="nav-poker" aria-selected="false"><i class="icon poker_ico"></i>Poker</button>
        <button class="nav-link" id="nav-cockfights-tab" data-bs-toggle="tab" data-bs-target="#nav-cockfights"
          type="button" role="tab" aria-controls="nav-cockfights" aria-selected="false"><i
            class="icon cock_ico"></i>CockFighting</button>

      </div>
    </div>
  </section>
  <section class="main">
    <div class="main_w content_find">
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
          tabindex="0">
          <h4 class="titles_game">Hot Game
            <a href="" class="view_all">View All</a>
          </h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in hotLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-sports" role="tabpanel" aria-labelledby="nav-sports-tab" tabindex="0">
          <h4 class="titles_game">SPORT</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in sportLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-casinos" role="tabpanel" aria-labelledby="nav-casinos-tab" tabindex="0">
          <h4 class="titles_game">CASINO</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in casinoLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-slots" role="tabpanel" aria-labelledby="nav-slots-tab" tabindex="0">
          <h4 class="titles_game">SLOT</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in slotLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-fishing" role="tabpanel" aria-labelledby="nav-fishing-tab" tabindex="0">
          <h4 class="titles_game">FISH</h4>
          <div class="items_main">
            <div class="items_game fishing_items" v-for="(items, index) in fishingLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-numbers" role="tabpanel" aria-labelledby="nav-numbers-tab" tabindex="0">
          <h4 class="titles_game">NUMBER</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in numberLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-lotterys" role="tabpanel" aria-labelledby="nav-lotterys-tab" tabindex="0">
          <h4 class="titles_game">LOTTERY</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items, index) in lotteryLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" :alt="items.name"> 
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-poker" role="tabpanel" aria-labelledby="nav-poker-tab" tabindex="0">
          <h4 class="titles_game">POKER</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items , index) in pokerLobby" :key="index">
              <img class="img_game" v-bind:src="items.url" alt="">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-cockfights" role="tabpanel" aria-labelledby="nav-cockfights-tab"
          tabindex="0">
          <h4 class="titles_game">COCK FIGHTING</h4>
          <div class="items_main">
            <div class="items_game" v-for="(items , index) in cockLobby" :key="index">
              <img  class="img_game" v-bind:src="items.url">
              <span class="overlays">
                <div class="text_title">
                  <h5>{{ items.name }}</h5>
                  <a href="">
                    <em>Play</em>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import sliderCard from '@/assets/js/slider_card.js';
export default {
  name: 'IndexLobby',
  data() {
    return {
      hotLobby: [
        { name: 'HOTGAME1', url: require('@/assets/images/home/1.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/2.jpg') },
        { name: 'HOTGAME1', url: require('@/assets/images/home/5.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/6.jpg') },
        { name: 'HOTGAME1', url: require('@/assets/images/home/8.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/9.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/11.jpg') },
        { name: 'HOTGAME1', url: require('@/assets/images/home/12.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/allbet.jpg') }, { name: 'HOTGAME1', url: require('@/assets/images/home/dg99.jpg') },
        { name: 'HOTGAME1', url: require('@/assets/images/home/pp_ca.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/sexy.jpg') },{ name: 'HOTGAME1', url: require('@/assets/images/home/tga.jpg') },
      ],
      sportLobby: [
        { name: 'SPORT1', url: require('@/assets/images/sport/afb2.png') },{ name: 'SPORT1', url: require('@/assets/images/sport/ibc.png') },
        { name: 'SPORT1', url: require('@/assets/images/sport/sbo.png') },{ name: 'SPORT1', url: require('@/assets/images/sport/tf.png') },
      ],
      casinoLobby: [
        { name: 'CASINO1', url: require('@/assets/images/casino/allbet.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/dg99.png') },
        { name: 'CASINO1', url: require('@/assets/images/casino/evo.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/gd.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/pp_ca.png') },
        { name: 'CASINO1', url: require('@/assets/images/casino/sa.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/sexy.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/tga.png') },
        { name: 'CASINO1', url: require('@/assets/images/casino/welive.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/wm.png') },{ name: 'CASINO1', url: require('@/assets/images/casino/yeebet.png') },
      ],
      slotLobby: [
        { name: 'SLOT1', url: require('@/assets/images/slot/afb.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/bestsoft.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/cq9.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/dragoon.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/fc.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/haba.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/icg.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/jili.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/joker.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/ka.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/leap.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/mega888.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/mg.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/netent.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/nextgen.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/pg.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/platipus.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/playstar.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/pp.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/pt.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/rich88.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/spadegaming.jpg') },
        { name: 'SLOT1', url: require('@/assets/images/slot/w88.jpg') },{ name: 'SLOT1', url: require('@/assets/images/slot/xe88.jpg') },
      ],
      fishingLobby: [
        { name: 'FISHING1', url: require('@/assets/images/fish/1.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/2.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/3.png') },
        { name: 'FISHING1', url: require('@/assets/images/fish/4.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/5.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/6.png') },
        { name: 'FISHING1', url: require('@/assets/images/fish/7.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/8.png') },
        { name: 'FISHING1', url: require('@/assets/images/fish/9.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/10.png') },
        { name: 'FISHING1', url: require('@/assets/images/fish/11.png') },{ name: 'FISHING1', url: require('@/assets/images/fish/12.png') },
      ],
      numberLobby: [
        { name: 'NUMBER1', url: require('@/assets/images/number/keno.jpg')},{ name: 'NUMBER1', url: require('@/assets/images/number/keno_new.jpg') },
        { name: 'NUMBER1', url: require('@/assets/images/number/livenumber.jpg')}, { name: 'NUMBER1', url: require('@/assets/images/number/new-keno.jpg') },
        { name: 'NUMBER1', url: require('@/assets/images/number/number.jpg')},
      ],
      lotteryLobby: [
        { name: 'LOTTERY1', url: require('@/assets/images/lottery/lottery.jpg')},{ name: 'LOTTERY1', url: require('@/assets/images/lottery/thai_lottery.jpg') },
        { name: 'LOTTERY1', url: require('@/assets/images/lottery/vn_lottery.jpg')},{ name: 'LOTTERY1', url: require('@/assets/images/lottery/vn2_lottery.jpg')},
      ],
      pokerLobby: [
        { name: 'POKER1', url: require('@/assets/images/poker/apoung.jpg') },{ name: 'POKER1', url: require('@/assets/images/poker/ham.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/kaiyuan.jpg') },{ name: 'POKER1', url: require('@/assets/images/poker/kate.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/klaklouk.jpg') },{ name: 'POKER1', url: require('@/assets/images/poker/ongdo.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/poke.jpg') },{ name: 'POKER1', url: require('@/assets/images/poker/sikuthai.jpg') },
        { name: 'POKER1', url: require('@/assets/images/poker/tienlen.jpg') },{ name: 'POKER1', url: require('@/assets/images/poker/we1poker.jpg') },
      ],
      cockLobby: [
        { name: 'COCK1', url: require('@/assets/images/cock/s128.jpg')}, { name: 'COCK1', url: require('@/assets/images/cock/sv388.jpg')},
      ]
    }
  }
}
</script>
