<template>
  <div class="home">
    <div id="nav">
      <ticker-bitcoin />
      <ticker-bitcoin-cash />
    </div>
  </div>
</template>

<script>
import Bitcoin from '@/components/BitStampBtc.vue'
import BitcoinCash from '@/components/BitStampBch.vue'
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
    'ticker-bitcoin': Bitcoin,
    'ticker-bitcoin-cash': BitcoinCash
  },
  async fetch({ store }) {
    await store.dispatch('bitstamp/GET_BTC')
    await store.dispatch('bitstamp/GET_BCH')
  },
  methods: {}
}
</script>
