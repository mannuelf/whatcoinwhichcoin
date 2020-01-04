<template>
  <div class="block animated fadeIn">
    <CoinPriceTicker :fiat="fiat" :name="name" :price="coin.ask" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/CoinPriceTicker'

export default {
  name: 'LiteCoin',
  components: {
    CoinPriceTicker
  },
  data() {
    return {
      name: 'LTC',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.ltc,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  },
  mounted() {}
}
</script>
