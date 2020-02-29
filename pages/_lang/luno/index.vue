<template>
  <div class="luno">
    <div id="nav">
      <section
        v-for="coin in coins.tickers"
        :key="coin.id"
        class="block__btn--std animated flipInX"
      >
        <span class="block__btn--coin">{{ coin.pair }}</span>
        <span class="block__btn--price">{{ coin.ask }}</span>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
export default {
  name: 'Luno',
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      exchange: state => state.exchange,
      coins: state => state.luno.list,
      error: state => state.luno.error
    })
  },
  async fetch({ store }) {
    await store.dispatch('luno/GET_ALL')
  },
  head() {
    return {
      bodyAttr: {
        class: 'luno'
      },
      title: this.$t('luno.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('luno.description')
        }
      ]
    }
  },
  mounted() {},
  methods: {
    setCurrency() {
      const currencies = {
        XBTIDR: 'Indonesian Rupiah',
        XBTMYR: 'Malaysian Ringgit',
        XBTNGN: 'Nigerian Naira',
        XBTZAR: 'ZAR',
        ETHXBT: 'BTC',
        XBTEUR: 'EURO'
      }
      return currencies
    }
  }
}
</script>

<style lang="sass" scoped>
.block

  &__btn--coin
    font-size: 0.6em

  &__btn--currency
    font-size: 0.6em

  &__btn--price
    font-size: 1em
    @media(min-width: 460px)
      font-size: 1.5em
</style>
