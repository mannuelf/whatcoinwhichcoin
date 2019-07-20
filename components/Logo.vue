<template>
  <div class="coin-logo">
    <img
      :src="'/logos/'+exchange+'.png'"
      :alt="exchange"
      class="coin-logo__image"
    >
  </div>
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
<style lang="sass" scoped>
.coin-logo
  z-index: 10
  background-color: #fdfff7
  display: inline-block
  height: auto
  margin: 0
  overflow: hidden
  padding: 10px
  position: absolute
  right: 1em
  top: 2.9em
  width: 100px
  border-radius: 4px 4px

  &__image
    width: 100%
</style>
