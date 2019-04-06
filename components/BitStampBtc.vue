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
        <a href="#" class="block__btn--std animated flipInX">
          <span class="block__btn--coin">BTC</span>
          <span class="block__btn--currency">$</span>
          <span class="block__btn--price">{{ results.high }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  name: 'BitStampBtc',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      results: null,
      errors: [],
      errored: false,
      loading: true
    }
  },
  mounted() {
    const currency = 'btcusd'
    const conversionUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://www.bitstamp.net/api/v2/ticker/'
    try {
      axios
        .get(conversionUrl + url + currency)
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
          const errorsNote = error
          this.rollbar.debug(errorsNote)
          this.errors.push(errorsNote)
        })
        .finally(() => {
          this.loading = false
        })
    } catch (e) {
      this.rollbar.error(e)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
