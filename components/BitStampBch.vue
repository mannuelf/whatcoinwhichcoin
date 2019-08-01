<template>
  <div class="block animated fadeIn">
    <section v-if="error">
      <ErrorNotice error="error" />
    </section>
    <section v-else>
      <div v-if="loading">
        <LoadingSpinner />
      </div>
      <div v-else>
        <CoinPriceTicker
          :fiat="fiat"
          :name="name"
          :price="coin.ask"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoinPriceTicker from '@/components/CoinPriceTicker'
import ErrorNotice from '@/components/ErrorNotice'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'BitcoinCash',
  components: {
    CoinPriceTicker,
    ErrorNotice,
    LoadingSpinner
  },
  data() {
    return {
      name: 'LTC',
      fiat: '$'
    }
  },
  computed: {
    ...mapState({
      coin: state => state.bitstamp.coin.bch,
      loading: state => state.bitstamp.coin.loading,
      error: state => state.bitstamp.coin.error
    })
  },
  mounted() {}
}
</script>
