<template>
  <figure class="coin-logo">
    <img :src="'/logos/'+exchange+'.png'" :alt="exchange">
  </figure>
</template>
<script>
export default {
  name: 'AppLogo',
  data() {
    return {
      exchange: ''
    }
  },
  computed: {},
  mounted() {
    this.getExchange()
  },
  methods: {
    getExchange() {
      if (
        this.$route.path === '/' ||
        this.$route.path === '/pt/bitstamp' ||
        this.$route.path === '/bitstamp'
      ) {
        this.exchange = 'bitstamp'
      }
      if (this.$route.path === '/luno' || this.$route.path === '/pt/luno') {
        this.exchange = 'luno'
      }
    }
  }
}
</script>

<style>
</style>
