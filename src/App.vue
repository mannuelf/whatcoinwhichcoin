<template>
  <div id="app">
    <SiteHeader />
    <div class="container">
      <Bitstamp />
      <CoinDesk />
    </div>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader'
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
}
</script>

<style lang="sass">
$richBlack: #001021
$darkLiver: #50514F
$maximumBluePurple: #B4ADEA
$babyPowder: #FDFFF7
$mediumAquamarine: #59FFA0
$maize: #FFED65
$burntOrange: #FF5E5B
$brightCerulean: #1B98E0

body
  background: $babyPowder

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  color: $darkLiver 
  
.container
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr))
  grid-gap: 0
  padding: 0

.site-header
  grid-area: header
  background-color: $richBlack
  padding: 0.5em
  color: $burntOrange
    
.block
  grid-gap: 0.5em
  grid-template-columns: 200px 1fr
  justify-content: center
  border: none
  padding: 0.5em
</style>
