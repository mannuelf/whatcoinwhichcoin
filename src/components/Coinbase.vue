<template>
    <div>
        <h2 class="coin-title">Coinbase</h2>

        <h3>Bitcoin</h3>
        <p>{{ results['btcusd'].high }}</p>

        <h3>Bitcoin Cash </h3>
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
  name: "Coinbase",
  data() {
    return {
      results: {},
      errors: []
    };
  },
  methods: {
    fetchCoins() {
      
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
