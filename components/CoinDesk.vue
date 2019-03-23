<template>
  <div class="block coindesk">
    <section v-if="errored">
      <p>Oops, try reloading the page</p>
    </section>

    <section v-else>
      <div v-if="loading">
        Loading...
      </div>
      <div v-for="currency in info" v-else :key="info.id" class="currency">
        <span v-html="currency.symbol" />
        {{ currency.rate_float | currencydecimal }}
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CoinDesk',
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  },
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style lang="sass" scoped>

</style>
