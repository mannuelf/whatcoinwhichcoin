<template>
  <div class="block bitstamp animated fadeIn">
    <section v-if="errored">
      <p>Oops, try reloading the page</p>
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
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
  name: 'Bitcoin',
  components: {
    CoinPriceTicker,
    LoadingSpinner
  },
  data() {
    return {
      errors: [],
      errored: false,
      loading: true
    }
  },
  computed: {
    ...mapState({
      coins: state => state.bitstamp.coins.btc
    })
  },
  async fetch({ store }) {
    await store.dispatch('bitstamp/GET_BTC')
  },
  mounted() {}
}
</script>
