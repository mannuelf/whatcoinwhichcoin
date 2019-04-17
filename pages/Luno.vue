<template>
  <div class="home">
    <div id="nav">
      <LunoTicker @click.native="goToBitcoin" />
    </div>
  </div>
</template>

<script>
import LunoTicker from '@/components/LunoTicker.vue'

export default {
  name: 'Home',
  head() {
    return {
      title: this.$t('home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description')
        }
      ]
    }
  },
  components: {
    LunoTicker
  },
  methods: {
    goToBitcoin: function(e) {
      // this.$router.go('/bitcoin')
    },
    goToBitcoinCash: function(e) {},
    goToEtherium: function(e) {},
    goToXrp: function(e) {},
    goToLtCoin: function(e) {}
  }
}
</script>
