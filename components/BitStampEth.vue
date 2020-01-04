<template>
  <div class="block animated fadeIn">
    <CoinPriceTicker :fiat="fiat" :name="name" :price="coin.ask" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/CoinPriceTicker'

export default {
  name: 'Etherium',
  components: {
    CoinPriceTicker
  },
  data() {
    return {
      name: 'ETH',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.eth,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  },
  mounted() {}
}
</script>
