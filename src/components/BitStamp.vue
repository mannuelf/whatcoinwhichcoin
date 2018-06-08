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
            <h2 class="coin-title">Bitstamp</h2>

            <h3>Bitcoin</h3>
            <p>$ {{ results.high }}</p>

            <!-- <h3>Bitcoin Cash</h3>
            <p>{{ results['btcusd'].high }}</p>

            <h3>XRP</h3>
            <p>{{ results['xrpusd'].high }}</p>

            <h3>Litecoin</h3>
            <p>{{ results['ltcusd'].high }}</p>

            <h3>Etherium</h3>
            <p>{{ results['ethusd'].high }}</p> -->
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

</style>
