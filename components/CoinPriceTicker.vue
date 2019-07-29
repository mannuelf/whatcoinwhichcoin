<template>
  <div>
    <a href="#" class="block__btn--std animated flipInX">
      <span class="block__btn--coin">{{ coin }}</span>
      <span class="block__btn--currency">{{ currency }}</span>
      <span class="block__btn--price">{{ price }}</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'CoinPriceTicker',
  props: {
    coin: {
      type: String,
      default() {
        return 'BTC'
      }
    },
    currency: {
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
