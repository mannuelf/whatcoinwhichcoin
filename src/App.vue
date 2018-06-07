<template>
  <div id="app">
    <SiteHeader />
    <div class="container">
      <Bitstamp />
      <CoinDesk />
      <CoinDesk />
      <CoinDesk />
      <CoinDesk />
      <CoinDesk />
    </div>
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
  
.container
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
  grid-gap: 0

.site-header
  grid-area: header
  background-color: azure
  margin: 0
  padding: 0.5em
    
.block
  grid-gap: 0.5em
  grid-template-columns: 200px 1fr
  justify-content: center
  border: none
  padding: 0.5em
  background-color: #fee
  

</style>
