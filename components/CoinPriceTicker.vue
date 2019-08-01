<template>
  <div>
    <a href="#" class="block__btn--std animated slideInRight">
      <span class="block__btn--coin">{{ name }}</span>
      <span class="block__btn--currency">{{ fiat }}</span>
      <span class="block__btn--price">{{ price }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'CoinPriceTicker',
  props: {
    name: {
      type: String,
      default() {
        return 'BTC'
      }
    },
    fiat: {
      type: String,
      default() {
        return '$'
      }
    },
    price: {
      type: String,
      default() {
        return '0.00'
      }
    }
  }
}
</script>
