<template>
  <div>
    <p>{{ results['btcusd'].high }}</p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Coinbase',
  data() {
    return {
      results: {},
      errors: []
    }
  },
  mounted() {
    this.fetchCoins()
    console.log('mounted')
  },
  methods: {
    fetchCoins() {}
  }
}
</script>
<style>
</style>
