<template>
  <div>
    <p>{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: 'ErrorNotice',
  props: {
    errorMessage: {
      type: String,
      default() {
        return 'Oh dear, please reload the page.'
      }
    }
  }
}
</script>
