<template>
  <div class="home">
    <div id="nav">
      <ticker-bitcoin />
      <ticker-bitcoin-cash />
      <ticker-etherium />
      <ticker-litecoin />
      <ticker-xrp />
    </div>
  </div>
</template>

<script>
import Bitcoin from '@/components/bitStampBtc'
import BitcoinCash from '@/components/bitStampBch'
import BitStampEth from '@/components/bitStampEth'
import BitStampLtCoin from '@/components/bitStampLtCoin'
import BitStampXrp from '@/components/bitStampXrp'

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
    'ticker-bitcoin-cash': BitcoinCash,
    'ticker-bitcoin': Bitcoin,
    'ticker-etherium': BitStampEth,
    'ticker-litecoin': BitStampLtCoin,
    'ticker-xrp': BitStampXrp
  },
  async fetch({ store }) {
    await store.dispatch('bitstamp/GET_COINS')
  }
}
</script>
