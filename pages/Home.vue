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
      console.log('next page', e)
    },
    goToBitcoinCash: function(e) {
      console.log('next page', e)
    },
    goToEtherium: function(e) {
      console.log('next page', e)
    },
    goToXrp: function(e) {
      console.log('next page', e)
    },
    goToLtCoin: function(e) {
      console.log('next page', e)
    }
  }
}
</script>
