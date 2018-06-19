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
import BitstampBtc from '@/components/BitstampBtc'
import BitstampBch from '@/components/BitstampBch'
import BitstampEth from '@/components/BitstampEth'
import BitstampXrp from '@/components/BitstampXrp'
import BitstampLtcoin from '@/components/BitstampLtcoin'

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
