<template>
  <header class="site-header">
    <h1>
      <nuxt-link to="/">
        <span style="color:#FFED65;">{{ $t('site-name.p1') }}</span>{{ $t('site-name.p3') }}
        <span style="color:#FFED65;">{{ $t('site-name.p2') }}</span>{{ $t('site-name.p3') }}
      </nuxt-link>
    </h1>
    <app-logo />
  </header>
</template>

<script lang="ts">
import Logo from '@/components/logo'
import { mapState } from 'vuex'
export default {
  name: 'SiteHeader',
  components: {
    'app-logo': Logo
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      exchange: state => state.exchange
    })
  }
}
</script>

<style lang="sass" scoped>
h1
  font-family: VT323
  font-size: 2em
  margin: 0
  width: fit-content
  font-weight: 400
  a
    color: #FFF
  @media(min-width: 640px)
    font-size: 2.1em
</style>
