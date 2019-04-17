<template>
  <div class="home">
    <div id="nav">
      <BitStampBtc @click.native="goToBitcoin" />
      <BitStampBch @click.native="goToBitcoinCash" />
      <BitStampEth @click.native="goToEtherium" />
      <BitStampXrp @click.native="goToXrp" />
      <BitStampLtCoin @click.native="goToLtCoin" />
    </div>
  </div>
</template>

<script>
import BitStampBtc from '@/components/BitStampBtc.vue'
import BitStampBch from '@/components/BitStampBch.vue'
import BitStampEth from '@/components/BitStampEth.vue'
import BitStampXrp from '@/components/BitStampXrp.vue'
import BitStampLtCoin from '@/components/BitStampLtCoin.vue'

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
    BitStampBtc,
    BitStampBch,
    BitStampEth,
    BitStampXrp,
    BitStampLtCoin
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
