<template>
  <div class="block animated fadeIn">
    <section v-if="error">
      <ErrorNotice error-message="errorMessage" />
    </section>
    <section v-else>
      <div v-if="loading">
        <LoadingSpinner />
      </div>
      <div v-else>
        <CoinPriceTicker
          :coin="coin"
          :currency="currency"
          :price="price"
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
  name: 'Bitcoin',
  components: {
    CoinPriceTicker,
    ErrorNotice,
    LoadingSpinner
  },
  data() {
    return {
      error: false,
      loading: true
    }
  },
  computed: {
    ...mapState({
      coins: state => state.bitstamp.coins.btc,
      errorMessage: state => state.bitstamp.errorMessage
    })
  },
  mounted() {}
}
</script>
