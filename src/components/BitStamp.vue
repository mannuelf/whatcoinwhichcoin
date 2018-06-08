<template>
    <div class="block bitstamp animated fadeIn">
        <section v-if="errored">
            <p>Sorry something broke, please check back later</p>
        </section>
        <section v-else>
          <div v-if="loading">
            Loading...
          </div>
          <div v-else>
            <a href="#" class="block__btn--std">
              <span class="block__btn--coin">BTC</span>
              <span class="block__btn--currency">$</span>
              <span class="block__btn--price">{{ results.high }}</span>
            </a> 
          </div>
        </section>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Bitstamp",
  data() {
    return {
      results: null,
      errors: [],
      errored: false,
      loading: true
    };
  },
  mounted() {
    const currency = "btcusd";
    const conversionUrl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://www.bitstamp.net/api/v2/ticker/"
     axios
        .get(conversionUrl + url + currency)
        .then(response => {
          this.results = response.data
          console.log(results)
        })
        .catch(error => {
          let errorsNote = error
          this.errors.push(errorsNote)
        })
        .finally(() => {
          this.loading = false
        })
  }
}
</script>

<style lang="sass" scoped>
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

.block
  padding: 0

  &__btn--std
    border-left: 5px solid $babyPowder
    display: grid
    grid-template-columns: 2fr 20px 1fr
    grid-gap: 0
    font-size: 2em
    padding: 0.5em
    transition: all 0.5s ease-out

    &:hover
      border-left: 5px solid $brightCerulean
      background: $blockBtnHover
      transition: all 0.5s ease-out

  &__btn--coin
    align-self: end
    font-size: 0.8em

  &__btn--currency
    font-size: 0.8em
  
  &__btn--price
    font-size: 2em
  
</style>
