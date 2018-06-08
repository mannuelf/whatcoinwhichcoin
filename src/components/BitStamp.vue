<template>
    <div class="block bitstamp">
        <section v-if="errored">
            <p>Sorry something broke, please check back later</p>
        </section>
        <section v-else>
          <div v-if="loading">
            Loading...
          </div>
          <div v-else>
            <a href="#" class="block__btn--std">
              <span class="block__btn--coin">BTC</span>
              <span class="block__btn--currency">$</span>
              <span class="block__btn--price">{{ results.high }}</span>
            </a> 
          </div>
        </section>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Bitstamp",
  data() {
    return {
      results: null,
      errors: [],
      errored: false,
      loading: true
    };
  },
  mounted() {
    const currency = "btcusd";
    const conversionUrl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://www.bitstamp.net/api/v2/ticker/"
     axios
        .get(conversionUrl + url + currency)
        .then(response => {
          this.results = response.data
          console.log(results)
        })
        .catch(error => {
          let errorsNote = error
          this.errors.push(errorsNote)
        })
        .finally(() => {
          this.loading = false
        })
  }
}
</script>

<style lang="sass" scoped>
.block
  &__btn--std
    display: grid

  &__btn--price

</style>
