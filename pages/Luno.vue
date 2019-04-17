<template>
  <div class="home">
    <div id="nav">
      <LunoTicker
        :pair="coins.tickers[0].pair"
        :price="coins.tickers[0].ask"
      />
    </div>
  </div>
</template>
.pair
<script>
import LunoTicker from '@/components/LunoTicker.vue'
import { mapState } from 'vuex'
import Consola from 'consola'
export default {
  name: 'Home',
  components: {
    LunoTicker
  },
  computed: {
    ...mapState({
      coins: state => state.luno.list
    })
  },
  async fetch({ store }) {
    await store.dispatch('luno/get')
  },
  head() {
    return {
      title: this.$t('home.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('home.description')
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(state => {
      Consola.info('ticking....')
    })
  },
  methods: {}
}
</script>
