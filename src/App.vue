<template>
  <div id="app">
    <SiteHeader />
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
import SiteHeader from './components/SiteHeader'
import BitstampBtc from "./components/BitStampBtc"
import BitstampBch from "./components/BitStampBch"
import BitstampEth from "./components/BitStampEth"
import BitstampXrp from "./components/BitStampXrp"
import BitstampLtcoin from "./components/BitStampLtcoin"

export default {
  name: "app",
  components: {
    SiteHeader,
    BitstampBtc,
    BitstampBch,
    BitstampEth,
    BitstampXrp,
    BitstampLtcoin
  },
  beforeCreate: function() {
    console.log(this.$appName)
  }
}
</script>

<style lang="sass">

$richBlack: #001021
$charcoal: #373F51
$darkLiver: #50514F
$maximumBluePurple: #B4ADEA
$babyPowder: #FDFFF7
$mediumAquamarine: #59FFA0
$maize: #FFED65
$burntOrange: #FF5E5B
$brightCerulean: #1B98E0
$blockBtnHover: #EDEDED

body
  background: $babyPowder
  overflow: hidden

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  color: $darkLiver 
  
.container
  display: grid;
  grid-gap: 0
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr))
  max-width: 100%
  padding: 0
  @media(min-width: 640px)
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr))

.site-header
  background-color: $maize
  color: $brightCerulean
  grid-area: header
  padding: 0.5em
    
.block
  border: none
  grid-gap: 0
  grid-template-columns: 200px 1fr
  justify-content: center
  padding: 0

a
  color: $darkLiver

  &:hover

  &:visited
    color: $darkLiver


.block
  padding: 0

  &__btn--std
    border-left: 5px solid $babyPowder
    display: grid
    font-size: 2em
    grid-gap: 0
    grid-template-columns: 0.5fr 20px 1fr
    padding: 0.5em
    transition: all 0.5s ease-out

    &:hover
      background: $blockBtnHover
      border-left: 5px solid $brightCerulean
      transition: all 0.5s ease-out

  &__btn--coin
    align-self: end
    font-size: 0.8em

  &__btn--currency
    font-size: 0.8em
  
  &__btn--price
    align-self: end
    font-size: 1.3em
    
    @media(min-width: 460px)
      font-size: 2em
</style>
