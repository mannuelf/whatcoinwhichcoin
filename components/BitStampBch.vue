<template>
  <div class="block animated fadeIn">
    <CoinPriceTicker :fiat="fiat" :name="name" :price="coin.ask" />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/coinPriceTicker'
import { getterTree } from 'typed-vuex'

export default {
  name: 'BitcoinCash',
  components: {
    CoinPriceTicker
  },
  data() {
    return {
      name: 'BCH',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.bch,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  }
}
</script>
