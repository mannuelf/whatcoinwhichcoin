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
  name: 'LiteCoin',
  components: {
    CoinPriceTicker,
    ErrorNotice,
    LoadingSpinner
  },
  data() {
    return {
      coin: {
        coin: 'LTC',
        fiat: '$'
      }
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
