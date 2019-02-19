<template>
    <div>
        <p>{{ results['btcusd'].high }}</p>
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
