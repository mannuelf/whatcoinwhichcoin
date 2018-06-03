<template>
    <div>
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
</template>
<script>
import axios from "axios"

export default {
  name: "Bitstamp",
  data() {
    return {
      results: {},
      errors: []
    };
  },
  methods: {
    fetchCoins() {
      let currency = ["btcusd", "bchusd", "xrpusd", "ltcusd", "ethusd"]
      const conversionUrl = "https://cors-anywhere.herokuapp.com/"
      const url = "https://www.bitstamp.net/api/v2/ticker/"
      let coins = {};
      for (let i = 0; i < currency.length; i++) {
        axios.get(conversionUrl + url + currency[i]).then(response => {
          coins[currency[i]] = response.data
          this.results[currency[i]] = response.data
        })
        .catch(e => {
          let errorsNote = e
          this.errors.push(errorsNote)
        })
      }
    }
  },
  mounted() {
    this.fetchCoins()
    console.log("mounted")
  }
};
</script>
<style>

</style>
