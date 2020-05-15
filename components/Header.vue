<template>
  <div>{{ appName }}</div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted } from '@vue/composition-api'
import { getters, RootState } from '~/store'
const appHeader = "mannuel"
interface appHeader {
  appName: string
}

export default defineComponent({
  props: {
    appHeader: {
      type: Object as () => appHeader,
      required: true
    }
  },

  setup({ appHeader }) {
    const appName = computed(() => `${appHeader}`)

    return {
      appName
    }
  }
})
</script>
