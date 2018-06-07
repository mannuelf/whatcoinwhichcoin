<template>
    <div class="block bitstamp">
        
        <section v-if="errored">
            <p>Sorry something broke, please check back later</p>
        </section>
        <section v-else>
          <div v-if="isLoaded">
            Loading...
          </div>
          <div v-else>
            <h2 class="coin-title">Bitstamp</h2>

            <h3>Bitcoin</h3>
            <p>{{ results['btcusd'].high }}</p>

            <h3>Bitcoin Cash</h3>
            <p>{{ results['btcusd'].high }}</p>

            <h3>XRP</h3>
            <p>{{ results['xrpusd'].high }}</p>

            <h3>Litecoin</h3>
            <p>{{ results['ltcusd'].high }}</p>

            <h3>Etherium</h3>
            <p>{{ results['ethusd'].high }}</p>
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
      isLoaded: false
    };
  },
  mounted() {
    const currency = ["btcusd", "bchusd", "xrpusd", "ltcusd", "ethusd"]
    const conversionUrl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://www.bitstamp.net/api/v2/ticker/"
    const coins = {};
    for (let i = 0; i < currency.length; i++) {
      axios
        .get(conversionUrl + url + currency[i])
        .then(response => {
          coins[currency[i]] = response.data
          this.results[currency[i]] = response.data
        })
        .catch(e => {
          let errorsNote = e
          this.errors.push(errorsNote)
          this.errored = true
        })
        .finally(() => {
          this.isLoaded = false
        })
    }
    console.log("mounted")
  }
}
</script>

<style lang="sass" scoped>

</style>
