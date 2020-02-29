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

<script lang="ts">
  import BitStampBtc from '@/components/bitStampBtc.vue'
  import BitStampBch from '@/components/bitStampBch.vue'
  import BitStampEth from '@/components/bitStampEth.vue'
  import BitStampXrp from '@/components/bitStampXrp.vue'
  import BitStampLtCoin from '@/components/bitStampLtCoin.vue'

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
      goToBitcoin: function() {
        // this.$router.go('/bitcoin')
      },
      goToBitcoinCash: function() {},
      goToEtherium: function() {},
      goToXrp: function() {},
      goToLtCoin: function() {}
    }
  }
</script>
