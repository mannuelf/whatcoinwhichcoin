<template>
  <div class="block bitstamp animated fadeIn">
    <section v-if="errored">
      <p>Oops, try reloading the page</p>
    </section>
    <section v-else>
      <div v-if="loading">
        <LoadingSpinner />
      </div>
      <div v-else>
        <a href="#" class="block__btn--std animated flipInX">
          <span class="block__btn--coin">{{ this.pair }}</span>
          <span class="block__btn--currency">$</span>
          <span class="block__btn--price">{{ this.price }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'
export default {
  name: 'Lunoticker',
  components: {
    LoadingSpinner
  },
  props: {
    pair: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      results: null,
      errors: [],
      errored: false,
      loading: true
    }
  },
  mounted() {}
}
</script>

<style lang="sass" scoped>

</style>
