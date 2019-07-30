<template>
  <div class="home">
    <div id="nav">
      <ticker-bitcoin />
      <!-- <BitStampBch @click.native="goToBitcoinCash" />
      <BitStampEth @click.native="goToEtherium" />
      <BitStampXrp @click.native="goToXrp" />
      <BitStampLtCoin @click.native="goToLtCoin" /> -->
    </div>
  </div>
</template>

<script>
import Bitcoin from '@/components/BitStampBtc.vue'
// import BitStampBch from '@/components/BitStampBch.vue'
// import BitStampEth from '@/components/BitStampEth.vue'
// import BitStampXrp from '@/components/BitStampXrp.vue'
// import BitStampLtCoin from '@/components/BitStampLtCoin.vue'

export default {
  name: 'Bitstamp',
  head() {
    return {
      bodyAttr: {
        class: 'bitstamp'
      },
      title: this.$t('bitstamp.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('bitstamp.description')
        }
      ]
    }
  },
  components: {
    'ticker-bitcoin': Bitcoin
    // BitStampBch,
    // BitStampEth,
    // BitStampXrp,
    // BitStampLtCoin
  },
  async fetch({ store }) {
    await store.dispatch('bitstamp/GET_BTC')
    console.log('store.dispatch/GET_BTC')
  },
  methods: {
    goToBitcoin: function(e) {
      // this.$router.go('/bitcoin')
    },
    goToBitcoinCash: function(e) {},
    goToEtherium: function(e) {},
    goToXrp: function(e) {},
    goToLtCoin: function(e) {}
  }
}
</script>
