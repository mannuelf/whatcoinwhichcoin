<template>
  <div class="home">
    <div class="container">
      <BitstampBtc />
      <BitstampBch />
      <BitstampEth />
      <BitstampXrp />
      <BitstampLtcoin />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BitstampBtc from '@/components/BitstampBtc.vue'
import BitstampBch from '@/components/BitstampBch.vue'
import BitstampEth from '@/components/BitstampEth.vue'
import BitstampXrp from '@/components/BitstampXrp.vue'
import BitstampLtcoin from '@/components/BitstampLtcoin.vue'

export default {
  name: 'home',
  components: {
    BitstampBtc,
    BitstampBch,
    BitstampEth,
    BitstampXrp,
    BitstampLtcoin
  }
}
</script>
