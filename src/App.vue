<template>
  <div id="app">
    <SiteHeader />
      <transition name="fade">
        <router-view/>
      </transition>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter
  },
  methods: {}
}
</script>

<style lang="sass">

$defaultFont: Avenir, Helvetica, Arial, sans-serif
$rajdHani: Rajdhani, sans-serif
$robotoMono: Roboto Mono, monospace

$fontThin: 100
$fontLight: 300
$fontRegular: 500
$fontBold: 700

$babyPowder: #FDFFF7
$blockBtnHover: #EDEDED
$brightCerulean: #1B98E0
$burntOrange: #FF5E5B
$charcoal: #373F51
$darkLiver: #50514F
$maize: #FFED65
$maximumBluePurple: #B4ADEA
$mediumAquamarine: #59FFA0
$richBlack: #001021

body
  background: $babyPowder

#app
  font-family: $defaultFont
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
  padding: 0.6em
  min-height: 40px
  z-index: 100

.block
  border: none
  grid-gap: 0
  grid-template-columns: 200px 1fr
  justify-content: center
  padding: 0

a
  color: $darkLiver

  &:hover
    color: $richBlack

  &:visited
    color: $darkLiver

.block
  padding: 0

  &__btn--std
    border-left: 10px solid $babyPowder
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
    font-family: $rajdHani, $defaultFont
    font-size: 0.8em
    font-weight: $fontBold

  &__btn--currency
    font-family: $rajdHani, $defaultFont
    font-size: 0.8em
    font-weight: $fontBold

  &__btn--price
    align-self: end
    font-family: $robotoMono, $defaultFont
    font-weight: $fontThin
    font-size: 1.2em
    @media(min-width: 460px)
      font-size: 2em
</style>
