<template>
    <div class="block bitstamp animated fadeIn">
        <section v-if="errored">
            <p>Oops, try reloading the page</p>
        </section>
        <section v-else>
          <div v-if="loading">
            Loading...
          </div>
          <div v-else>
            <a href="#" class="block__btn--std animated flipInX">
              <span class="block__btn--coin">XRP</span>
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
  name: "BitstampXrp",
  data() {
    return {
      results: null,
      errors: [],
      errored: false,
      loading: true
    };
  },
  mounted() {
    const currency = "xrpusd";
    const conversionUrl = "https://cors-anywhere.herokuapp.com/"
    const url = "https://www.bitstamp.net/api/v2/ticker/"
     axios
        .get(conversionUrl + url + currency)
        .then(response => {
          this.results = response.data
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

</style>
