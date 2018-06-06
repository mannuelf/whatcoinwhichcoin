<template>
  <div id="app">
    <SiteHeader />
    <Bitstamp />
    <CoinDesk />
  </div>
</template>

<script>
import SiteHeader from './components/Site-Header'
import Bitstamp from "./components/BitStamp"
import CoinDesk from "./components/CoinDesk"

export default {
  name: "app",
  components: {
    SiteHeader,
    Bitstamp,
    CoinDesk
  },
  beforeCreate: function() {
    console.log(this.$appName)
  }
};
</script>

<style lang="sass">
body
  background: #eee

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: grid

.block
  display: grid
  grid-template-columns: repeat(auto, 1fr)

</style>
