<template>
  <div class="block animated fadeIn">
    <CoinPriceTicker :fiat="fiat" :name="name" :price="coin.ask" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/coinPriceTicker'

export default {
  name: 'Bitcoin',
  components: {
    CoinPriceTicker
  },
  data() {
    return {
      name: 'BTC',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.btc,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  },
  mounted() {}
}
</script>
