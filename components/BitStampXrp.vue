<template>
  <div class="block animated fadeIn">
    <CoinPriceTicker :fiat="fiat" :name="name" :price="coin.ask" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/coinPriceTicker'

export default {
  name: 'XRP',
  components: {
    CoinPriceTicker
  },
  data() {
    return {
      name: 'XRP',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.xrp,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  },
  mounted() {}
}
</script>
